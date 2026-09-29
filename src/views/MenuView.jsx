import React, { useMemo, useRef, useState } from 'react';
import { categories, dishes, filterDishes, mealGroups } from '../models/MenuModel';
import DishCard from '../components/DishCard';

const mealCategories = {
  Breakfast: ['North Indian', 'South Indian'],
  Brunch: ['Starters', 'Salads', 'Italian'],
  Lunch: ['North Indian', 'South Indian', 'Chinese', 'Italian', 'Continental', 'Salads', 'Soups'],
  Dinner: ['North Indian', 'South Indian', 'Italian', 'Chinese', 'Continental', 'Pizza', 'Pasta', 'Biryani', 'Breads', 'Burgers', 'Main Course'],
  'Tea & Coffee': ['Tea & Coffee', 'Beverages'],
  Desserts: ['Desserts', 'Indian Sweets', 'Cakes & Pastries', 'Ice Cream'],
};

export default function MenuView({ onOpenDish }) {
  const [meal, setMeal] = useState('All');
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  const resultsRef = useRef(null);
  const list = useMemo(() => filterDishes(dishes, cat, query, meal), [cat, query, meal]);
  const visibleCategories = meal === 'All' ? categories.filter(c => c !== 'All') : (mealCategories[meal] || categories.filter(c => c !== 'All'));

  const chooseMeal = (name) => {
    setMeal(name);
    setCat('All');
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };
  const chooseCategory = (name) => {
    setCat(name);
    requestAnimationFrame(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  return (
    <section className="content-wrap page-section menu-page">
      <div className="menu-intro">
        <span className="eyebrow">MADE TO MAKE YOU HAPPY</span>
        <h1 className="page-title">The menu<span>.</span></h1>
        <p className="page-lead">A little something for every craving. Start with a moment, then find your flavour.</p>
      </div>

      <div className="menu-tools">
        <label className="search-box"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search dishes or ingredients..." /></label>
        <span className="results-count">{list.length} dishes</span>
      </div>

      <div className="meal-section-head">
        <div><span className="eyebrow">EXPLORE THE MENU</span><h2>What are you in the mood for?</h2></div>
        {meal !== 'All' && <button className="clear-filters" onClick={() => { setMeal('All'); setCat('All'); }}>View all menu ↺</button>}
      </div>
      <div className="meal-cards" aria-label="Menu sections">
        {mealGroups.map(group => (
          <button key={group.name} className={`meal-card ${meal === group.name ? 'active' : ''}`} onClick={() => chooseMeal(group.name)}>
            <img src={group.image} alt={`${group.name} food`} loading="lazy" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.style.visibility='hidden'}} />
            <span className="meal-card-overlay" />
            <span className="meal-card-copy"><b>{group.name}</b><small>{group.subtitle}</small></span>
            <span className="meal-card-arrow">↗</span>
          </button>
        ))}
      </div>

      <div className="menu-results" ref={resultsRef}>
        <div className="menu-filter-heading">
          <div><span className="eyebrow">{meal === 'All' ? 'FIND YOUR FAVOURITE' : `EXPLORE ${meal.toUpperCase()}`}</span><h2>{meal === 'All' ? 'Browse dishes' : `${meal} menu`}</h2></div>
          <button className="clear-filters" onClick={() => { setMeal('All'); setCat('All'); setQuery(''); }}>Reset filters ↺</button>
        </div>
        <div className="menu-categories" aria-label="Dish categories">
          <button className={cat === 'All' ? 'selected' : ''} onClick={() => chooseCategory('All')}>All dishes</button>
          {visibleCategories.map(c => <button key={c} className={cat === c ? 'selected' : ''} onClick={() => chooseCategory(c)}>{c}</button>)}
          {meal === 'All' && <><button className={cat === 'Veg' ? 'selected' : ''} onClick={() => chooseCategory('Veg')}>Veg</button><button className={cat === 'Non-Veg' ? 'selected' : ''} onClick={() => chooseCategory('Non-Veg')}>Non-Veg</button></>}
        </div>
        <div className="menu-results-head"><span>{cat === 'All' ? (meal === 'All' ? 'All dishes' : `All ${meal.toLowerCase()} dishes`) : cat}</span><small>Freshly made, just for you</small></div>
        <div className="dish-grid menu-grid">{list.map(d => <DishCard key={d.id} dish={d} onOpen={onOpenDish} />)}</div>
        {!list.length && <div className="empty-state"><h3>No dishes found</h3><p>Try another dish name or category.</p><button className="text-link" onClick={() => { setMeal('All'); setCat('All'); setQuery(''); }}>Clear filters ↗</button></div>}
      </div>
    </section>
  );
}
