import "./App.css";
import ResponsiveDrawer from "./Sidebar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveDrawer />
      </BrowserRouter>
    </div>
  );
}

export default App;
