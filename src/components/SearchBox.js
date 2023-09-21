import styles from '../css/styles.css'
import React from 'react';

const filterMenu = document.getElementById('filter');
const sortMenu = document.getElementById('sort');
const search = document.querySelector('.search-input');

function SearchBox() {
    return (
        <section>
        <div class="search-filters-container">
          <div class="search-filters-bar">
            <div class="search-input">
              <ion-icon name="search-outline" style={{color: "var(--body-text)"}}></ion-icon>
              <input class="input-text" type="text" placeholder="Search the website..."/>
            </div>
            <div class="h-line"></div>
            <div class="v-line"></div>
            <div style={{display: "flex"}}>

              <div class="filter">
                <label for="sort">Sort by:</label>
                <select name="sort" id="sort">
                    <option value="default">Default</option>
                    <option value="topic">Topic</option>
                    <option value="name">Author Name</option>
                </select>
              </div>
              <div class="v-line"></div>

              <div class="filter">
                <label for="filter">Filter by:</label>
                <select name="filter" id="filter">
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
    );
}

export default SearchBox;
