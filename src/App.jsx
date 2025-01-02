import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
