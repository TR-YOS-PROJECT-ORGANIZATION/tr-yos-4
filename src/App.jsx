import "./App.css";
import Card1 from "./components/card/Card";
import Departments from "./pages/Departments";
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <HomePage />
      {/*Router yapılmadığı için sadece değişiklikleri görebilmek amacıyla koydum */}
      <Departments/>
    </>
  );
}

export default App;
