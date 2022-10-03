export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("CartItmes") !== "undefined"
      ? JSON.parse(localStorage.getItem("CartItmes"))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};
