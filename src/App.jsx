import "./App.css";
import AppRouter from "./router/AppRouter";
import SignInModal from "./components/modals/SignInModal";
import SignUpModal from "./components/modals/SignUpModal";
import { useState } from "react";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";



function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openUpModal, setOpenUpModal] = useState(false);

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