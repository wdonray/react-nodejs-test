import React from "react";
import axios from "axios";

function Weather() {
  let [weather, setWeather] = React.useState("No value yet");
  let [loading, setLoading] = React.useState(false);
  let getWeather = () => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios("/getWeather");
      setTimeout(() => {
        setWeather(result.data.temp_f);
        setLoading(false);
      }, 1500);
    };
    fetchData();
  };
  React.useEffect(() => {
    getWeather();
  }, []);
  return (
    <div>
      <button onClick={() => getWeather()}> Get weather in Lafayette </button>
      <h1>
        {`The weather in Lafayette is: ${
          loading ? "Getting Data..." : `${weather}f`
        }`}
      </h1>
    </div>
  );
}

export default Weather;
