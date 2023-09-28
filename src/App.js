import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PrimaryHeader from './components/PrimaryHeader';
import SecondaryHeader from './components/SecondaryHeader';
import TopicsDisplay from './components/TopicsDisplay';
import Footer from './components/Footer';
import TopicDetails from './components/TopicDetails';
import { Layout } from "./components/Layout";
import { ThemeContextProvider } from "./components/ThemeContext";

function App() {
  
  return (
    <ThemeContextProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<TopicsDisplay />} />
            <Route path="details/:id" element={<TopicDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
