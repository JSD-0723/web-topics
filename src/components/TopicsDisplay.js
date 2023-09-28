import styles from '../css/styles.css'
import React from 'react';
import SearchBox from './SearchBox';
import { useEffect, useState } from "react";
import { loadTopics } from '../shared/api';
import { Link } from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../images', false, /\.(png|jpeg|jpg|svg|gif|webp)$/));


const TopicsDisplay = ({ }) => {
    const [topics, setTopics] = useState([]);
    const [viewTopics, setViewTopics] = useState(null);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('');

    const [filterBy, setFilterBy] = useState('');
    const [filterOptions, setFilterOptions] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTopics([]);

        loadTopics(search)
            .then((data) => {
                setTopics(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [search]);

    useEffect(() => {
        let categories = new Set();
        topics.forEach(topic => categories.add(topic.category));
        setFilterOptions([...categories]);
        let updatedTopics = [...topics];

        if (sortBy) {
            updatedTopics.sort((a, b) => {
                switch (sortBy) {
                    case 'author':
                        return a['name'] < b['name'] ? -1 : 1;

                    case 'topic':
                        return a['topic'] < b['topic'] ? -1 : 1;

                    default:
                        return updatedTopics;
                }
            });
        }
        if (filterBy) {
            updatedTopics = updatedTopics.filter(topic => topic.category == filterBy);
        }

        setViewTopics(updatedTopics);
    }, [topics, sortBy, filterBy]);
    const setOptions = filterOptions?.map(filterOptions => (
        <option value={filterOptions}>{filterOptions}</option>
    ));
    return (
        <>
            <main class="body-main">
                <section>
                    <div class="search-filters-container">
                        <div class="search-filters-bar">
                            <div class="search-input">
                                <ion-icon name="search-outline" style={{ color: "var(--body-text)" }}></ion-icon>
                                <input class="input-text" type="text" placeholder="Search the website..." onChange={(event) => { setSearch(event.target.value) }} />
                            </div>
                            <div class="h-line"></div>
                            <div class="v-line"></div>
                            <div style={{ display: "flex" }}>

                                <div class="filter">
                                    <label for="sort">Sort by:</label>
                                    <select name="sort" id="sort" onChange={(event) => { setSortBy(event.target.value) }}>
                                        <option value="default">Default</option>
                                        <option value="topic" name="Topic" id="Topic">Topic</option>
                                        <option value="author" id="Author Name">Author Name</option>
                                    </select>
                                </div>
                                <div class="v-line"></div>

                                <div class="filter">
                                    <label for="filter">Filter by:</label>
                                    <select name="filter" id="filter" onChange={(event) => { setFilterBy(event.target.value) }}>
                                        <option value="">Default</option>
                                        {setOptions}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="courses">
                    <h2 class="courses-count">"{topics.length}" Web Topics Found</h2>
                    {topics.length > 0 && (
                        <article class="cards">
                            {viewTopics.map(topic => (
                                <Link to={`/web-topics/details/${topic.id}`}>
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
                                </Link>
                            ))}
                        </article>
                    )}
                </section>
            </main>
        </>
    )
}

export default TopicsDisplay;


