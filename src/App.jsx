import "./App.css";
import Card1 from "./components/card/Card";
import HomePage from './pages/HomePage'
import UniversitiesPage from "./pages/UniversitiesPage"; 
import UniversityCard from "./components/card/UniversityCard";

function App() {
  return (
    <>
      <HomePage />
      <UniversitiesPage/>
      <UniversityCard/>
      
    </>
  );
}

export default App;