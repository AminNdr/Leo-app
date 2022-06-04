import { useState , useEffect } from "react";
import "./App.css";
import Layout from "./Components/Shared/Layout";
import Context from "./Context/Context";

function App() {

  const [list,setList] = useState([]);

  const getLocalList = () => {
    let localData = localStorage.getItem("list");
    if (localData != null) {
      setList(JSON.parse(localStorage.getItem("list")));
    }
  };


  useEffect(() => {
    getLocalList();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={[list , setList ]}>
        <Layout />
      </Context.Provider>
    </div>
  );
}

export default App;
