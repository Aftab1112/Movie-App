import React, {
  useContext,
  useGlobalContext,
  useEffect,
  useState,
} from "react";

const API_URL = `https://www.omdbapi.com/?apikey=ac9064b&s=fast`;

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setisError] = useState({ show: "false", msg: "" });
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setisLoading(false);
        setMovie(data.Search);
      } else {
        setisError({
          show: true,
          msg: data.error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie }}>
      {children}
    </AppContext.Provider>
  );
};

useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
