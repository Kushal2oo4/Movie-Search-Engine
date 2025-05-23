import "./css/App.css";
import Favorites from "./Pages/Favorites";
import Home from "./Pages/Home";
import NavBar from "./Components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./Context/MovieContext";

function App() {
  const movieNumber = 1;

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
