import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [abilities, setAbilities] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setAbilities(result.abilities);
        },

        (error) => {
          console.log("error");
        }
      );
  }, [url]);

  return [abilities];
};
