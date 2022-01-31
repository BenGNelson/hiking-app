const apiRoute = "http://localhost:5000/api/v1/hikes";

export const getAllHikes = async () => {
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

export const addHike = async (hikeName, hikeLength, hikeRating) => {
  try {
    const response = await fetch(apiRoute, {
      method: "POST",
      body: JSON.stringify({
        hikeName,
        hikeLength,
        hikeRating,
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
  }
};

export const deleteHike = async (deletedHike) => {
  try {
    const response = await fetch(`${apiRoute}/${deletedHike._id}`, {
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
