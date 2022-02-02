const axios = require("axios");

const apiRoute = "http://localhost:5000/api/v1/users";

export const getUserById = async (userId) => {
  try {
    const response = await fetch(`apiRoute/${userId}`);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getUserByName = async (username) => {
  try {
    const res = await axios.get(`${apiRoute}/${username}`, {
      validateStatus: false,
    });
    const responseData = res.data;
    console.log(res.data);

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (username, password) => {
  try {
    const res = await axios.post(
      apiRoute,
      {
        username,
        password,
      },
      {
        validateStatus: false,
      }
    );

    const responseData = res.data;

    return responseData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const logInUser = async (username, password) => {
  try {
    const res = await axios.post(
      `${apiRoute}/login`,
      {
        username,
        password,
      },
      {
        validateStatus: false,
      }
    );

    const responseData = res.data;

    return responseData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${apiRoute}/all`);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (deletedUser) => {
  try {
    const response = await fetch(`${apiRoute}/${deletedUser._id}`, {
      method: "DELETE",
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    console.log(error);
  }
};
