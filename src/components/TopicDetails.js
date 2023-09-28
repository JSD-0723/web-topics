import styles from '../css/styles.css'
import React from 'react';
import styled, { css } from 'styled-components';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('../images', false, /\.(png|jpeg|jpg|svg|gif|webp)$/));



function TopicDetails() {
    const [topic, setTopics] = useState([]);
    const [currentTopic, setCurrentTopic] = useState(null);
    const { id } = useParams();
    const subTopics = currentTopic?.subTopics?.map(subTopic => (
        <li>
            <ion-icon
                name="checkmark-circle-outline"
            >
            </ion-icon>{subTopic}
        </li>
    ));
    const fetchData = async () => {
        const response = await fetch(`https://tap-web-1.herokuapp.com/topics/details/${id}`)
        const data = await response.json()
        setTopics(data)
    }

    useEffect(async () => {
        await fetchData();
    }, []);

    return (
        <>


            <main style={{ backgroundColor: "var(--bg_body)" }}>
                <section class="details-header">
                    <div class="details-header-container">
                        <div class="details-header-content">
                            <h3 style={{ color: "var(--brand-secondary)" }}>{topic.category}</h3>
                            <h4 style={{ fontSize: "24px", color: "#EDEDED" }}>{topic.topic}</h4>
                            <div class="stars-rate">
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star"></ion-icon>
                                <ion-icon name="star-outline"></ion-icon>
                            </div>
                            <p style={{ marginTop: "1.1rem", color: "#EDEDED", fontWeight: "600" }}>
                                {topic.description}
                            </p>
                        </div>
                        <div class="details-side-card">
                            <div class="details-side-card-container">
                                <img src={images[topic.image]} class="img-fluid" alt={topic.topic} />
                                <div class="card-body">
                                    <p>
                                        <span style={{ fontWeight: "700" }}>{topic.topic}</span> by
                                        <a style={{ color: "var(--brand-primary)" }}> Sarah Smith</a>
                                    </p>
                                    <div class="bottom-box">
                                        <p>Interested about this topic?</p>
                                        <button class="btn-fav">
                                            Add to Favourites &nbsp;
                                            <ion-icon name="heart-outline"></ion-icon>
                                        </button>
                                        <p class="details-side-card-credits">unlimited credits</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <section class="course-topics">
                    <div class="course-topics-container">
                        <div class="course-topics-sub-container">
                            <h3 class="course-topics-title">
                                {topic.topic} Sub Topics
                            </h3>
                            <ul class="course-topic">
                                { subTopics }
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )

}

export default TopicDetails;