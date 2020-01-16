import React, { useState, useEffect } from "react";
import Axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    Axios.get("https://api.coingecko.com/api/v3/events")
      .then(result => console.log("News Results: ", result.data.data))
      .catch(err => console.log(err));
  }, []);

  return <></>;
};

export default News;
