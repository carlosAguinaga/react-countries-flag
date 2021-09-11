import { useEffect, useState } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState();

  //consultamos el api
  const handleFetchAPI = async () => {
    try {
      const response = await fetch(url);
      const dataAPI = await response.json();
      setData(dataAPI);
    } catch (e) {
        console.log(e)
    }
  };

  useEffect(() => {
    handleFetchAPI();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data };
};

export default useFetchData;
