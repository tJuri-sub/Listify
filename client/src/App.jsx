import { Routes, Route } from "react-router-dom";
import { MainPage } from "./components/mainpage";
import { Signup } from "./components/authentication/signup";
import { Signin } from "./components/authentication/signin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
