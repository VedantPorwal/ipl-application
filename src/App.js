import "./styles.css";
import Header from "./components/Header";
import HomePage from "./page/HomePage";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<HomePage />} />
      </Routes>
    </div>
  );
}
