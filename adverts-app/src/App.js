import { useState } from "react";
import AdsPage from "./components/adverts/AdvertsPage";
import NewAdvertPage from "./components/adverts/NewAdvertPage";
import LoginPage from "./components/auth/LoginPage";

function App({ isInitallyLoged }) {
  const [isLogged, setIsLogged] = useState(isInitallyLoged);
  const handleLogin = () => setIsLogged(true);
  return (
    <div className="App">
      {isLogged ? <AdsPage /> : <LoginPage onLogin={handleLogin} />}

      {/* <NewAdvertPage /> */}
    </div>
  );
}

export default App;
