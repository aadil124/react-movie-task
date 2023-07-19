import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import data from "./data/data.json"

function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value)
    setSearchValue(() => e.target.value)
  }
  // filter logic 
  const filterCardData = () => {
    return data.filter((item) =>
      item.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || searchValue === ""
    )
  }
  return (
    <div>
      <Navbar handleChange={handleChange} />
      <MovieCard data={data} filterCardData={filterCardData} />
      <Footer />
    </div>
  );
}

export default App;
