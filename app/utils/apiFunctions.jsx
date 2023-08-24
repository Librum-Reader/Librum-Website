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
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBooks = async (data) => {
  try {
    console.log(data);
    const response = await fetch(
      "https://librum-dev.azurewebsites.net/api/book",
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
    console.log("books", result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getVerifiedStatus = async (email) => {
  try {
    // console.log(token);
    const response = await fetch(
      `https://librum-dev.azurewebsites.net/api/checkIfEmailConfirmed/${email}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        method: "GET",
      }
    );

    const result = await response.json();
    if (result == true) {
      return true;
    }
    // return result;
  } catch (error) {
    console.error(error);
  }
};

export const editUser = async (data) => {
  try {
    console.log(
      JSON.stringify({
        op: "replace",
        path: "firstname",
        value: data.email,
      })
    );
    const response = await fetch(
      "https://librum-dev.azurewebsites.net/api/user",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.token}`,
        },
        method: "PATCH",
        body: JSON.stringify([
          {
            op: "replace",
            path: "firstName",
            value: data.firstName,
          },
          {
            op: "replace",
            path: "lastName",
            value: data.lastName,
          },
          // {
          //   op: "replace",
          //   path: "Email",
          //   value: data.email,
          // },
        ]),
      }
    );
    const result = await response;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const uploadAvatar = async (data) => {
  try {
    console.log("file from api handler", data.file);

    const response = await fetch(
      "https://librum-dev.azurewebsites.net/api/user/profilePicture",
      {
        headers: {
          Accept: "multipart/form-data",
          Authorization: `Bearer ${data.token}`,
        },
        method: "POST",
        body: data.file,
      }
    );

    const result = await response;
    console.log(result);

    return result;
  } catch (error) {
    console.error(error);
  }
};
