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
    const response = await fetch(`${apiRoute}/${username}`);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(apiRoute);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const addUser = async (username, password) => {
  try {
    const response = await fetch(apiRoute, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }

    return responseData;
  } catch (error) {
    console.log(error);
    return error;
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
