import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PrimaryHeader from './components/PrimaryHeader';
import SecondaryHeader from './components/SecondaryHeader';
import TopicsDisplay from './components/TopicsDisplay';
import Footer from './components/Footer';
import TopicDetails from './components/TopicDetails';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
);

reportWebVitals();
