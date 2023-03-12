import { store } from "@redux/store";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <CookiesProvider>
      <Provider store={store}>
        <RouterProvider router={routes} />;
      </Provider>
    </CookiesProvider>
  );
}

export default App;
