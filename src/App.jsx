import "./App.css";
import Card1 from "./components/card/Card";
import Departments from "./pages/Departments";
import React from 'react';
import UniversitiesPage from './pages/UniversitiesPage';
import UniversityCard from './components/card/UniversityCard';


const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <Departments/> 
      <UniversitiesPage />
      <UniversityCard />
     
    </div>
  );
}

export default App;
