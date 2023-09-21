import styles from '../css/styles.css'
import React from 'react';
import SearchBox from './SearchBox';
import { useEffect, useState } from "react";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../images', false, /\.(png|jpeg|jpg|svg|gif|webp)$/));


const TopicsDisplay = ({}) => {
    const [topic, setTopics] = useState([])

    const fetchData = async () => {
        const response = await fetch("https://tap-web-1.herokuapp.com/topics/list")
        const data = await response.json()
        setTopics(data)
    }

    useEffect(() => {
        fetchData()
    }, []);
    const Search = e => {
        const query = e.target.value;
        fetch(`https://tap-web-1.herokuapp.com/topics/list?phrase=${query}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setTopics(data)
            })
    }

    const Filter = e => {
        const query = e.target.value;
        const filteredTopic = topic.filter(
            (topic) => topic.category === query);
        
        fetch(`https://tap-web-1.herokuapp.com/topics/list`)
            .then(response => {
                return response.json();
            })
            .then(filteredTopic => {
                setTopics(filteredTopic)
            })
    }
    
    return (
        <>

            <main class="body-main">
                <section>
                    <div class="search-filters-container">
                        <div class="search-filters-bar">
                            <div class="search-input">
                                <ion-icon name="search-outline" style={{ color: "var(--body-text)" }}></ion-icon>
                                <input onChange={Search} class="input-text" type="text" placeholder="Search the website..." />
                            </div>
                            <div class="h-line"></div>
                            <div class="v-line"></div>
                            <div style={{ display: "flex" }}>

                                <div class="filter">
                                    <label for="sort">Sort by:</label>
                                    <select name="sort" id="sort" >
                                        <option value="default">Default</option>
                                        <option value="topic" name="Topic" id="Topic">Topic</option>
                                        <option value="name" id="Author Name">Author Name</option>
                                    </select>
                                </div>
                                <div class="v-line"></div>

                                <div class="filter">
                                    <label for="filter">Filter by:</label>
                                    <select name="filter" id="filter" onChange={Filter}>
                                        <option value="">Default</option>
                                        <option value="Web Development Languages">Web Development Languages</option>
                                        <option value="Frontend Frameworks and Libraries">Frontend Frameworks and Libraries</option>
                                        <option value="Backend Frameworks and Libraries">Backend Frameworks and Libraries</option>
                                        <option value="Databases and APIs">Databases and APIs</option>
                                        <option value="Web Development Concepts and Technologies">Web Development Concepts and Technologies</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="courses">
                    <h2 class="courses-count">"24" Web Topics Found</h2>
                    {topic.length > 0 && (
                        <article class="cards">
                            {topic.map(topic => (
                                <a class="card"> 
                                    <img class="card-img" key={topic.id} src={images[topic.image]} alt="{topic.image}" />
                                    <div class="item-content">
                                        <h2 class="title">{topic.category}</h2>
                                        <h3 class="category">{topic.topic}</h3>
                                        <div>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star"></ion-icon>
                                            <ion-icon name="star-outline"></ion-icon>
                                        </div>
                                        <p class="author">Author: {topic.name}</p>
                                    </div>

                                </a>
                            ))}
                        </article>
                    )}
                </section>
            </main>
        </>
    )
}

export default TopicsDisplay;


