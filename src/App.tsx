import { RouterProvider } from "react-router-dom";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./Routes/path";
import { ThemeProvider } from "styled-components";
import { theme } from "antd";
import { useEffect, useState } from "react";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
