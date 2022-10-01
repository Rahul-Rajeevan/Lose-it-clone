import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Mohit/Login";
import Homepage from "./HomePage/Homepage";
import LandingPage from "./pages/landing/LandingPage";
import { Route, Routes } from "react-router-dom";
import FirstPage from "./Components/SignUpThing/FirstPage";
import RequireAuth from "./Components/RequireAuth";
import ThirdPage from "./Components/SignUpThing/ThirdPage";
import SecondPage from "./Components/SignUpThing/SecondPage";
import FourthPage from "./Components/SignUpThing/FourthPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupheader" element={<FirstPage />} />
        <Route path="/enterdatas" element={<SecondPage />} />
        <Route path="/caloriedata" element={<ThirdPage />} />
        <Route path="/signup" element={<FourthPage />} />

        <Route
          path="/landing"
          element={
            <RequireAuth>
              <LandingPage />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
