export const addToLocalStorage = (response) => {
  const tokenExpirationDate = new Date(new Date().getTime() + 1000 * 60 * 60);

  localStorage.setItem(
    "userData",
    JSON.stringify({
      username: response.username,
      token: response.token,
      expiration: tokenExpirationDate.toISOString(),
    })
  );
};

export const deleteLocalStorage = () => {
  localStorage.removeItem("userData");
};
