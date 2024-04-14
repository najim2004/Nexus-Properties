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
  const removeBookmarkedId = storedHome.filter((home) => home !== id);

  localStorage.setItem("bookmarked", JSON.stringify(removeBookmarkedId));
};

export { getStoredData, saveBookmarked, removeBookmarked };
