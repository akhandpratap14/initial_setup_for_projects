import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/Authentication/SignIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      {/* <Route path="/about" element={<SignUp />} /> */}
    </Routes>
  );
}

export default App;
