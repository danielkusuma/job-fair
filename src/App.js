import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroImage from './components/HeroImage/HeroImage';
import CategoryCard from './components/CategoryCard/CategoryCard';
import Categories from './components/CategoryCard/data/categories';
import tabsData from '.components/Tabs/data/tabsData';
import Tab from './components/Tabs/Tabs';

function App() {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <div className="App">
      <Navbar />
      <HeroImage />
      {Categories.map(Categories => (<
        CategoryCard
          key = {Categories.id}
          image = {Categories.image}
          title = {Categories.title} />
        ))}
      <div className="Tabs">
        {tabsData.map(tab => (
          <Tab
            key = {tab.id}
            label = {tab.label}
            isActive = {activeTab === tab.id}
            onClick = {() => setActiveTab(tab.id)}
            />
        ))}
      </div>
    </div>
  );
}
export default App;