import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./Routes/path";
import { ThemeProvider } from "styled-components";
import { theme } from "antd";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <PersistGate persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
