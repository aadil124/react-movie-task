import './App.css';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import data from "./data/data.json"

function App() {
  return (
    <div>
     <Navbar/>
     <MovieCard data={data}/>
     <Footer/>
    </div>
  );
}

export default App;
