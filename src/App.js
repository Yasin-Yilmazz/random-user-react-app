import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";

function App() {
  const url = "https://randomuser.me/api/";
  const [fetching, setFetching] = useState(true);
  const [user, setUser] = useState([]);
  const createUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results[0]);
      setFetching(false);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    createUser();
  }, []);

  if (fetching) {
    return <h2>Fetching...</h2>;
  }

  return (
    <div className="App">
      <div>
        <Card {...user} />
      </div>
      <div>
        <button className="btn btn-success" onClick={() => createUser()}>
          Random User
        </button>
      </div>
    </div>
  );
}

export default App;
