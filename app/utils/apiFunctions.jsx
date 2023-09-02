import jwt_decode from "jwt-decode";

export const userLogin = async (data) => {
  try {
    console.log(data);
    const response = await fetch(
      "https://api.librumreader.com/authentication/login",
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

    const response = await fetch("https://api.librumreader.com/register", {
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
    });

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
    console.log("USER", result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const fetchBooks = async (data) => {
  try {
    const response = await fetch("https://api.librumreader.com/book", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${data}`,
      },
      method: "GET",
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const getVerifiedStatus = async (email) => {
  try {
    // console.log(token);
    const response = await fetch(
      `https://api.librumreader.com/authentication/checkIfEmailConfirmed/${email}`,
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

    const response = await fetch("https://api.librumreader.com/user", {
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
        //   path: "hasProfilePicture",
        //   value: data.hasProfilePicture,
        // },
        // {
        //   op: "replace",
        //   path: "Email",
        //   value: data.email,
        // },
      ]),
    });
    const result = await response;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const updatePictureInfo = async (data) => {
  try {
    console.log(
      JSON.stringify({
        op: "replace",
        path: "firstname",
        value: data.email,
      })
    );

    const response = await fetch("https://api.librumreader.com/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      method: "PATCH",
      body: JSON.stringify([
        {
          op: "replace",
          path: "hasProfilePicture",
          value: data.hasProfilePicture,
        },
        {
          op: "replace",
          path: "profilePictureLastUpdated",
          value: data.lastUpdated,
        },
      ]),
    });
    const result = await response;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};

export const changePassword = async (data) => {
  console.log(data);

  try {
    const response = await fetch("https://api.librumreader.com/user", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${data.token}`,
      },
      method: "POST",
      body: JSON.stringify({
        Input: data.password,
      }),
    });

    const contentType = response.headers.get("Content-Type");
    if (contentType && contentType.includes("application/json")) {
      const result = await response.json();
      return result;
    } else {
      return response;
    }
  } catch (error) {
    console.error(error);
  }
};

export const uploadAvatar = async (data) => {
  try {
    const response = await fetch(
      "https://api.librumreader.com/user/profilePicture",
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

export const fetchAvatar = async (data) => {
  try {
    const response = await fetch(
      "https://api.librumreader.com/user/profilePicture",
      {
        headers: {
          Authorization: `Bearer ${data}`,
        },
        method: "GET",
      }
    );

    const result = await response.arrayBuffer();

    const base64Image = btoa(
      new Uint8Array(result).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );

    const imageData = `data:image/jpeg;base64,${base64Image}`;

    return imageData;
  } catch (error) {
    console.error(error);
  }
};
