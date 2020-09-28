import React from "react";
import "./App.css";
import Weather from './Weather'

function App() {
  const [apiResponse, setAPIResponse] = React.useState("");

  React.useEffect(() => {
    fetch("http://localhost:4000/testAPI")
      .then((res) => res.text())
      .then((res) => setAPIResponse(res));
    return () => {
      
    };
  }, [apiResponse]);
  return (
    <div className="App">
      <header className="App-header">
        <p>{apiResponse}</p>
        <Weather/>
      </header>

    </div>
  );
}

export default App;
