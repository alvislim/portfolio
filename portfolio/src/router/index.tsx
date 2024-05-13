import { useRoutes, BrowserRouter } from "react-router-dom";
import Landing from "@/Landing";
import NavBar from "@/component/NavBar";
import { NavBarTitle, items } from "@/constant";

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
      <NavBar />;
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
