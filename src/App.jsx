import "./App.css";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";



function App() {

  return (
    <div>
    <Provider store={store}>
      <AppRouter />      
      </Provider>
      <ToastContainer/>
  
    </div>
  );
}

export default App;