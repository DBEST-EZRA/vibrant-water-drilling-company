import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Vibrant Water Drilling</h1>
      <Stats/>
      <Footer/>
    </div>
  );
}

export default App;
