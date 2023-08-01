import "./App.css";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, { persistor } from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Suspense } from "react";
import { Dots } from "react-activity";

function App() {
  return (
    <Suspense
      fallback={<Dots color="#FFFFFF" size={32} speed={1} animating={true} />}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
          <ToastContainer />
        </PersistGate>
      </Provider>
    </Suspense>
  );
}

export default App;
