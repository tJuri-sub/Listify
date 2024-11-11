import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/mainpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
