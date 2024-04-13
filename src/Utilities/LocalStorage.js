const getStoredData = () => {
  const storedHome = localStorage.getItem("bookmarked");
  if (storedHome) {
    return JSON.parse(storedHome);
  } else {
    return [];
  }
};

const saveBookmarked = (id) => {
  const storedHome = getStoredData();
  const existingBookmarked = storedHome.find((home) => home === id);
  if (!existingBookmarked) {
    storedHome.push(id);
    localStorage.setItem("bookmarked", JSON.stringify(storedHome));
  }
};

const removeBookmarked = (id) => {
  const storedHome = getStoredData();
  const existingBookmarked = storedHome.find((home) => home === id);
  if (existingBookmarked) {
    storedHome.splice(storedHome.indexOf(id), 1);
    localStorage.setItem("bookmarked", JSON.stringify(storedHome));
  }
};

export { getStoredData, saveBookmarked, removeBookmarked };
