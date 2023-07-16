import jwt_decode from "jwt-decode";

export const userLogin = async (data) => {
  try {
    console.log(data);
    const response = await fetch(
      "https://librum-dev.azurewebsites.net/api/login",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({ Email: data.Email, Password: data.Password }),
      }
    );

    const result = await response.json();

    localStorage.setItem("token", result);

    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const userRegistration = async (data) => {
  try {
    console.log(data);

    const response = await fetch(
      "https://librum-dev.azurewebsites.net/api/register",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          FirstName: data.FirstName,
          LastName: data.LastName,
          Email: data.Email,
          Password: data.Password,
        }),
      }
    );

    const result = await response;
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserInfo = async (data) => {
  try {
    console.log(data);
    const response = await fetch(
      "https://librum-dev.azurewebsites.net/api/user",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${data}`,
        },
        method: "GET",
      }
    );

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
