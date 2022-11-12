import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import AdsPage from "./components/adverts/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import LoginPage from "./components/auth/LoginPage";
import AdvertDetailPage from "./components/adverts/AdvertDetail";
import { RequireAuth } from "./components/auth/RequireAuth";
import Layout from "./components/Layout/Layout";

function App({ isInitallyLoged }) {
  const [isLogged, setIsLogged] = useState(isInitallyLoged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        <Route
          path="/adverts"
          element={<Layout isLogged={isLogged} onLogout={handleLogout} />}
        >
          <Route
            index
            element={
              <RequireAuth isLogged={isLogged}>
                <AdsPage />
              </RequireAuth>
            }
          />
          <Route
            path=":adId"
            element={
              <RequireAuth isLogged={isLogged}>
                <AdvertDetailPage />
              </RequireAuth>
            }
          />
          <Route
            path="new"
            element={
              <RequireAuth isLogged={isLogged}>
                <NewAdvertPage />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path="/"
          element={
            <RequireAuth isLogged={isLogged}>
              <Navigate to="/adverts" />
            </RequireAuth>
          }
        />

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
