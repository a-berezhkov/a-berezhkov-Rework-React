import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
