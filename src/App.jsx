import "./App.css";
import Card1 from "./components/card/Card";
import Departments from "./pages/Departments";
import React from 'react';
import UniversityCard from './components/card/UniversityCard';
import UniversitiesPage from './pages/UniversitiesPage';

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Departments/>
      <UniversityCard />
      <UniversitiesPage />
    </div>
  );
}

export default App;
