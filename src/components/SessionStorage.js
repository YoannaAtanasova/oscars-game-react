import { useEffect, useState } from "react";
import { GlobalStorageKeys } from "../Global";

export const SessionStorage = () => {
  const [gameInformation, setGameInformation] = useState({
    isGameRunning: true,
    endDate: null,
  });
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    getGameInformation();
    getCategoriesData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      GlobalStorageKeys.GAME_IS_RUNNING,
      gameInformation.isGameRunning
    );
    sessionStorage.setItem(
      GlobalStorageKeys.GAME_END_DATE,
      gameInformation.endDate
    );

    sessionStorage.setItem(
      GlobalStorageKeys.CATEGORIES_DATA,
      JSON.stringify(categoriesData)
    );

    //to be removed after login is implemented
    sessionStorage.setItem(GlobalStorageKeys.USER_IS_LOGGED_IN, true);
    sessionStorage.setItem(GlobalStorageKeys.USER_ID, 1);
  }, [gameInformation, categoriesData]);

  const getGameInformation = async () => {
    return await fetch(`${process.env.REACT_APP_API_URL}/game-information`)
      .then((response) => response.json())
      .then((data) => {
        setGameInformation({
          isGameRunning: data.IsGameRunning,
          endDate: data.EndDate,
        });
      });
  };

  const getCategoriesData = async () => {
    return await fetch(`${process.env.REACT_APP_API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => setCategoriesData(data));
  };
  return null;
};
