import logo from "./logo.svg";
import "./App.css";

import { Counter } from "./components/Counter.jsx";
function App() {
  return (
    <div className="App">
      {/* <UserDeatails name="reddy" place="hebbal"/>
      <UserDeatails name="Neelu" place="hebbal"/> */}
      <Counter />
    </div>
  );
}

export default App;
