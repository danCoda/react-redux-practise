import logo from "./logo.svg";
import "./App.css";
import UserList from "../containers/user-list";
import UserDetails from "../containers/user-details";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <UserList />
      <br />
      <UserDetails />
    </div>
  );
}

export default App;
