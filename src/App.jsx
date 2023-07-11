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
        {
          //  navbar bölümü
          <div className="w-full h-[82px]  flex items-center justify-end">
            <div className="flex gap-4 h-[51px]  pr-[100px]">
              <button
                onClick={() => setOpenModal(!openModal)}
                className="border rounded bg-cyan-950 text-white px-4 py-2"
              >
                Sign In
              </button>
              <button
                onClick={() => setOpenUpModal(!openUpModal)}
                className="border rounded bg-cyan-600	 text-white px-4 py-2"
              >
                Sign Up
              </button>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;