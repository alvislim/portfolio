import { useRoutes, BrowserRouter } from "react-router-dom";
import Landing from "@/Landing";

const App = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Landing />,
      children: [],
    },
  ]);

  return element;
};

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
