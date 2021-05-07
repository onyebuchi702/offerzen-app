import Header from "./components/Header"
import Candidates from "./components/Candidates"
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/font.scss";

function App() {
  return (
    <div className="App">
      <Header/>
      <Candidates/>
    </div>
  );
}

export default App;
