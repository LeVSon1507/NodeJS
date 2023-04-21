
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './page/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <User/>,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />

  );
}

export default App;
