import { store } from "@redux/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes} />;
    </Provider>
  );
}

export default App;
