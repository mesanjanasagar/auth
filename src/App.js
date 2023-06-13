import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state) => state.auth.token);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Boolean(isAuth) ? <Home /> : <Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
