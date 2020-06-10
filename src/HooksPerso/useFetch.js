import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [error, setError] = useState(null);

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
