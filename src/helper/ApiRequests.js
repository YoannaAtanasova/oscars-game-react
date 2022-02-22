import { GlobalStorageKeys } from "../Global";

export async function getCategoriesData() {
  var categoriesData = [];

  var storageData = JSON.parse(
    sessionStorage.getItem(GlobalStorageKeys.CATEGORIES_DATA)
  );

  if (storageData) {
    categoriesData = storageData;
  } else {
    await fetch(`${process.env.REACT_APP_API_URL}/categories`)
      .then((response) => response.json())
      .then((data) => (categoriesData = data));

    sessionStorage.setItem(
      GlobalStorageKeys.CATEGORIES_DATA,
      JSON.stringify(categoriesData)
    );
  }

  return categoriesData;
}

export async function getGameInformation() {
  var gameInformation = {
    isGameRunning: true,
    endDate: null,
  };

  var storageData = JSON.parse(
    sessionStorage.getItem(GlobalStorageKeys.GAME_INFORMATION)
  );

  if (storageData) {
    gameInformation = storageData;
  } else {
    await fetch(`${process.env.REACT_APP_API_URL}/game-information`)
      .then((response) => response.json())
      .then((data) => {
        gameInformation = {
          isGameRunning: data.IsGameRunning,
          endDate: data.EndDate,
        };
      });

    sessionStorage.setItem(
      GlobalStorageKeys.GAME_INFORMATION,
      JSON.stringify(gameInformation)
    );
  }

  return gameInformation;
}
