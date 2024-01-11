import React from "react";
import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider, useDispatch } from "react-redux";
// import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./Routes/path";

const App = () => {
  return (
    <div>
     <Provider store={store}>
        {/* <ToastContainer /> */}
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
       </Provider>
      </div>
  );
};

export default App;


