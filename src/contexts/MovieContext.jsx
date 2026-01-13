import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
const [favorites, setFavorites] = useState([])




  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};
