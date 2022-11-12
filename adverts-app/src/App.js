import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AdsPage from "./components/adverts/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import LoginPage from "./components/auth/LoginPage";
import AdvertDetailPage from "./components/adverts/AdvertDetail";

function App({ isInitallyLoged }) {
  const [isLogged, setIsLogged] = useState(isInitallyLoged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/adverts" element={<AdsPage onLogout={handleLogout} />} />
        <Route path="/adverts/:id" element={<AdvertDetailPage />} />
        <Route path="/adverts/new" element={<NewAdvertPage />} />
        <Route path="/" element={<Navigate to="/adverts" />} />
        <Route
          path="/404"
          element={<div>404 | La página que intentas cargar no existe</div>}
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      {/* {isLogged ? (
        <AdsPage onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}

      <NewAdvertPage /> */}
    </div>
  );
}

export default App;
