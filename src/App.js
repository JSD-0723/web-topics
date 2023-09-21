import logo from './logo.svg';
import './App.css';
import PrimaryHeader from './components/PrimaryHeader';
import SecondaryHeader from './components/SecondaryHeader';
import TopicsDisplay from './components/TopicsDisplay';
import Footer from './components/Footer';
import TopicDetails from './components/TopicDetails';

function App() {
  return (
    <>
    <PrimaryHeader/>
    <SecondaryHeader/>
    <TopicsDisplay/>
    <Footer/>
    </>
  );
}

export default App;
