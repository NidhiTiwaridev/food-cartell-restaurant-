import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { dishes } from '../models/MenuModel';
import { money } from '../utils/currency';

const nav = [
  ['Dashboard', '/admin/dashboard', '▦'], ['Orders', '/admin/orders', '▤'],
  ['Order detail', '/admin/order-detail', '▣'], ['Customers', '/admin/customers', '♙'],
  ['Analytics', '/admin/analytics', '⌁'], ['Reviews', '/admin/reviews', '☆'],
  ['Foods', '/admin/foods', '◈'], ['Menu', '/admin/menu', '☷'],
  ['Inventory', '/admin/inventory', '▧'], ['Calendar', '/admin/calendar', '▦'],
  ['Messages', '/admin/messages', '✉'], ['Payments', '/admin/payments', '＄'],
  ['Staff', '/admin/staff', '♧'], ['Settings', '/admin/settings', '⚙'],
];
const titles = Object.fromEntries(nav.map(([name, path]) => [path, name]));
const orders = [
  ['#FC-2408', 'Aarav Mehta', '2 items', '₹ 728', 'Preparing'],
  ['#FC-2407', 'Riya Shah', '3 items', '₹ 1,240', 'Delivered'],
  ['#FC-2406', 'Kabir Joshi', '1 item', '₹ 329', 'Pending'],
  ['#FC-2405', 'Sara Khan', '4 items', '₹ 1,890', 'Delivered'],
];

function getRows(path) {
  if (path === '/admin/customers') return [
    ['CU-1024', 'Aarav Mehta', '12 orders', '₹ 8,420', 'Active'],
    ['CU-1023', 'Riya Shah', '8 orders', '₹ 6,210', 'Active'],
    ['CU-1022', 'Kabir Joshi', '4 orders', '₹ 2,180', 'New'],
  ];
  if (path === '/admin/reviews') return [
    ['RV-204', 'Riya Shah', '★ ★ ★ ★ ★', 'Loved the food', 'Published'],
    ['RV-203', 'Aarav Mehta', '★ ★ ★ ★', 'Lovely ambience', 'Published'],
    ['RV-202', 'Sara Khan', '★ ★ ★', 'Great dessert', 'Pending'],
  ];
  if (path === '/admin/inventory') return [
    ['IN-01', 'Paneer', '12 kg', 'Low stock', 'Check'],
    ['IN-02', 'Basmati rice', '35 kg', 'In stock', 'Good'],
    ['IN-03', 'Mozzarella', '8 kg', 'In stock', 'Good'],
  ];
  if (path === '/admin/calendar') return [
    ['Sep 28', 'Sunday brunch', '12:30 PM', '8 guests', 'Confirmed'],
    ['Sep 29', 'Birthday table', '7:00 PM', '6 guests', 'Confirmed'],
  ];
  if (path === '/admin/messages') return [
    ['MSG-104', 'Aarav Mehta', 'Table for 4?', 'Today', 'Unread'],
    ['MSG-103', 'Riya Shah', 'Thanks for dinner!', 'Yesterday', 'Read'],
  ];
  if (path === '/admin/payments') return [
    ['PAY-204', 'Order #FC-2408', 'UPI', '₹ 728', 'Paid'],
    ['PAY-203', 'Order #FC-2407', 'Card', '₹ 1,240', 'Paid'],
  ];
  if (path === '/admin/staff') return [
    ['ST-01', 'Maya Patel', 'Manager', 'Full time', 'Active'],
    ['ST-02', 'Arjun Rao', 'Chef', 'Full time', 'Active'],
  ];
  if (path === '/admin/order-detail') return [
    ['Item', 'Qty', 'Unit price', 'Total', 'Status'],
    ['Paneer Tikka', '2', money(329), money(658), 'Preparing'],
    ['Masala Chai', '1', money(99), money(99), 'Preparing'],
  ];
  if (path === '/admin/settings') return [
    ['Restaurant profile', 'Food Cartell', 'General', 'Today', 'Active'],
    ['Opening hours', '12 PM – 11 PM', 'Schedule', 'Today', 'Active'],
  ];
  return orders;
}

function Chart() {
  return <div className="chart-box">
    <div className="chart-legend"><span><i />Revenue</span><span><i />Orders</span><select><option>Last 7 days</option><option>Last 30 days</option></select></div>
    <svg viewBox="0 0 700 220" preserveAspectRatio="none" role="img" aria-label="Demo revenue trend">
      <defs><linearGradient id="area" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#39b88a" stopOpacity=".25" /><stop offset="1" stopColor="#39b88a" stopOpacity="0" /></linearGradient></defs>
      {[35, 80, 125, 170].map(y => <line key={y} x1="0" x2="700" y1={y} y2={y} stroke="var(--line)" strokeDasharray="4 6" />)}
      <path d="M0 160 C45 150 48 95 100 110 S170 160 205 125 S280 45 325 82 S390 150 430 110 S500 65 540 90 S610 155 650 95 S680 70 700 55 L700 200 L0 200Z" fill="url(#area)" />
      <path d="M0 160 C45 150 48 95 100 110 S170 160 205 125 S280 45 325 82 S390 150 430 110 S500 65 540 90 S610 155 650 95 S680 70 700 55" fill="none" stroke="#28a879" strokeWidth="3" strokeLinecap="round" />
      <path d="M0 180 C55 175 75 145 120 155 S200 180 250 155 S315 120 370 145 S450 170 500 145 S590 180 650 135 S680 130 700 120" fill="none" stroke="#f3a35c" strokeWidth="2.5" strokeLinecap="round" />
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => <text key={day} x={i * 116 + 10} y="218" fill="var(--muted)" fontSize="11">{day}</text>)}
    </svg>
  </div>;
}

function Table({ rows = orders }) {
  const headers = ['Reference', 'Customer / Item', 'Details', 'Amount', 'Status'];
  return <div className="table-wrap"><table><thead><tr>{headers.map(h => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((row, i) => <tr key={i}>{row.map((cell, j) => <td key={j}>{j === 4 ? <span className={`status ${String(cell).toLowerCase()}`}>{cell}</span> : cell}</td>)}</tr>)}</tbody></table></div>;
}

export default function AdminView({ theme, onTheme }) {
  const location = useLocation();
  const path = location.pathname;
  const title = titles[path] || 'Dashboard';
  const [range, setRange] = useState('This week');
  const stats = [['Total orders', '1,248', '↑ 12.8%', '▤'], ['Total revenue', '₹ 2,84,560', '↑ 8.4%', '＄'], ['Total customers', '856', '↑ 6.2%', '♙'], ['Avg. order value', '₹ 728', '↑ 3.1%', '◉']];
  const analytics = path === '/admin/dashboard' || path === '/admin/analytics';
  const foodPage = path === '/admin/menu' || path === '/admin/foods';
  return <div className="admin-shell">
    <aside className="admin-sidebar">
      <NavLink to="/" className="admin-brand"><img src="/images/food-cartell-mark.jpg" alt="Food Cartell logo" /><span><b>Food Cartell</b><small>RESTAURANT ADMIN</small></span></NavLink>
      <div className="admin-label">WORKSPACE</div>
      <nav>{nav.map(([name, url, icon]) => <NavLink key={url} to={url} className={({ isActive }) => isActive ? 'active' : ''}><span className="nav-icon">{icon}</span>{name}</NavLink>)}</nav>
      <div className="sidebar-help"><span>✦</span><b>Need a hand?</b><small>Manage your restaurant with ease.</small><NavLink to="/contact">Get support ↗</NavLink></div>
      <div className="admin-user"><div className="user-pic">FC</div><div><b>Restaurant Admin</b><small>Owner account</small></div><span>•••</span></div>
    </aside>
    <section className="admin-content">
      <header className="admin-topbar"><div className="crumb">Workspace <span>/</span> <b>{title}</b></div><div className="admin-top-actions"><button className="icon-btn" onClick={onTheme} title="Toggle theme">{theme === 'light' ? '☾' : '☀'}</button><button className="icon-btn" title="Notifications">♧<i className="notify-dot" /></button><div className="admin-person"><div className="user-pic">FC</div><span><b>Restaurant Admin</b><small>Owner</small></span></div></div></header>
      <main className="admin-page">
        <div className="admin-page-head"><div><span className="eyebrow">GOOD TO SEE YOU AGAIN</span><h1>{path === '/admin/dashboard' ? 'Your restaurant at a glance' : title}</h1><p>Here's what's happening at Food Cartell today.</p></div><div className="head-actions"><select value={range} onChange={e => setRange(e.target.value)}><option>This week</option><option>This month</option><option>This year</option></select><button className="primary-btn" onClick={() => alert('Report export can be connected to your backend.')}>↓ Export report</button></div></div>
        {analytics ? <>
          <div className="stats-grid">{stats.map(([label, value, trend, icon]) => <article className="stat-card" key={label}><div className="stat-top"><span>{label}</span><i>{icon}</i></div><strong>{value}</strong><small><b>{trend}</b> vs previous period</small></article>)}</div>
          <div className="analytics-grid"><section className="panel revenue-panel"><div className="panel-head"><div><h2>{path === '/admin/analytics' ? 'Performance overview' : 'Revenue overview'}</h2><p>Revenue and order activity · demo data</p></div><button className="quiet-btn">•••</button></div><Chart /></section><section className="panel best-panel"><div className="panel-head"><div><h2>Best selling items</h2><p>Top picks this week</p></div><NavLink to="/admin/foods">View all ↗</NavLink></div>{dishes.slice(0, 4).map((dish, i) => <div className="best-item" key={dish.id}><img src={dish.image} alt="" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.style.visibility='hidden'}} /><div><b>{dish.name}</b><small>{[128, 96, 82, 64][i]} orders</small></div><strong>{money(dish.price)}</strong></div>)}</section></div>
          <div className="bottom-grid"><section className="panel"><div className="panel-head"><div><h2>Recent orders</h2><p>Latest activity from your restaurant</p></div><NavLink to="/admin/orders">View all ↗</NavLink></div><Table /></section><section className="panel quick-panel"><div className="panel-head"><div><h2>Quick insights</h2><p>Today at a glance</p></div></div><div className="insight"><span>↗</span><div><b>Peak order time</b><small>7:00 PM – 9:00 PM</small></div></div><div className="insight"><span>✦</span><div><b>Customer favourite</b><small>Paneer Tikka</small></div></div><div className="insight"><span>◷</span><div><b>Average prep time</b><small>18 minutes</small></div></div></section></div>
        </> : <section className="panel admin-list-panel"><div className="panel-head"><div><h2>{title} overview</h2><p>Manage and review your restaurant {title.toLowerCase()}.</p></div><button className="primary-btn" onClick={() => alert('This action is a UI demo. Connect a backend to save changes.')}>＋ Add new</button></div>{foodPage ? <div className="admin-food-grid">{dishes.map(dish => <div className="admin-food" key={dish.id}><img src={dish.image} alt="" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.style.visibility='hidden'}} /><div><b>{dish.name}</b><small>{dish.category} · {dish.veg ? 'Veg' : 'Non-veg'}</small></div><strong>{money(dish.price)}</strong></div>)}</div> : <Table rows={getRows(path)} />}{path === '/admin/orders' && <div className="table-extra"><button className="quiet-btn">← Previous</button><span>Page 1 of 12</span><button className="quiet-btn">Next →</button></div>}</section>}
        <p className="admin-disclaimer">Sample admin workspace · metrics and records are illustrative, not live restaurant data.</p>
      </main>
    </section>
  </div>;
}
