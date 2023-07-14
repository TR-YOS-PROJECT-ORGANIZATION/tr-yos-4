import "./App.css";
import HomePage from "./pages/HomePage";
import Footer from "../src/footer/Footer";
import AppRouter from "./router/AppRouter";
import SignInModal from "./components/SignInModal";
import SignUpModal from "./components/SignUpModal";
import { useState } from "react";


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openUpModal, setOpenUpModal] = useState(false);
  return (
    <div>
      <AppRouter />
      <SignInModal
        open={openModal}
        setOpen={setOpenModal}
        setOpenUpModal={setOpenUpModal}
      />
      <SignUpModal
        open={openUpModal}
        setOpen={setOpenUpModal}
        setOpenUpModal={setOpenModal}
      />
      <div className="App ">
     
      </div>
    </div>
  );
}

export default App;