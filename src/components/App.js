import React, {useState} from 'react'
import { menuData } from './data';
import Menu from './Menu';
import "../styles/App.css"

const App = () => {
    const [items, setItems] = useState(menuData);
  const [category, setCategory] = useState('All');

  const handleFilter = (category) => {
    setCategory(category);
    if (category === 'All') {
      setItems(menuData);
    } else {
      const filteredItems = menuData.filter(item => item.category === category);
      setItems(filteredItems);
    }
  };
  return (
    <div id="main" className="container">
      <h1 className="title">Our Menu</h1>
      <div className="btn-container">
        <button id="filter-btn-1" onClick={() => handleFilter('Breakfast')} className="filter-btn">Breakfast</button>
        <button id="filter-btn-2" onClick={() => handleFilter('Lunch')} className="filter-btn">Lunch</button>
        <button id="filter-btn-3" onClick={() => handleFilter('Shakes')} className="filter-btn">Shakes</button>
      </div>
      <Menu items={items} />
    </div>
  )
}

export default App
