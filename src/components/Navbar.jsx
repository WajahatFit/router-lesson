import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/">Home</NavLink></li>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/about">About</NavLink></li>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/create">Create project</NavLink></li>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/contact">Contact</NavLink></li>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/projects">Projects</NavLink></li>
        <li><NavLink className={(element) => element.isActive ? 'selected' : ''} to="/joke">Joke</NavLink></li>
        <li><button onClick={() => navigate(-1)}>Go back</button></li>
      </ul>
    </div>
  )
}
