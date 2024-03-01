import jwt_decode from "jwt-decode";
import { getStripe } from "./stripe-client";

export const userLogin = async (data) => {
  try {
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
  console.log(data);
  try {
    const response = await fetch(
      "https://api.librumreader.com/authentication/register",
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          //   Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          Name: data.FullName,
          Email: data.Email,
          Password: data.Password,
        }),
      }
    );

    const { status } = response;

    if (status >= 400 && status <= 500) {
      const result = await response?.json();

      return {
        success: false,
        ...result,
      };
    }

    return {
      success: true,
      status,
    };
  } catch (error) {
    console.error(error);
  }
};

export const fetchUserInfo = async (data) => {
  try {
    const response = await fetch("https://api.librumreader.com/user", {
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
    // console.log(
    //   JSON.stringify({
    //     op: "replace",
    //     path: "firstname",
    //     value: data.email,
    //   })
    // );

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
          path: "name",
          value: data.name,
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

export const resetPassword = async (email) => {
  console.log(email);
  try {
    const response = await fetch(
      `https://api.librumreader.com/user/forgotPassword/${email}`,
      { method: "POST" }
    );
    const result = await response;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const confirmPasswordReset = async (data) => {
  console.log(data);
  try {
    const response = await fetch(
      "https://api.librumreader.com/user/resetPassword",
      {
        headers: {
          Accept: "application/json",

          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          token: data.token,
          password: data.password,
        }),
      }
    );

    const result = await response;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteAvatar = async (data) => {
  console.log(data);
  try {
    const response = await fetch(
      "https://api.librumreader.com/user/profilePicture",
      {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${data}`,
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );

    const result = await response;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const deleteAccount = async (data) => {
  try {
    const response = await fetch("https://api.librumreader.com/user", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${data}`,
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    const result = await response;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const createPortalLink = async (data) => {
  try {
    const response = await fetch("/api/create-portal-link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data?.email,
        name: data?.name || data?.firstName + " " + data?.lastName,
        customerId: data?.customerId,
      }),
    });
    const { url } = await response.json();
    return url;
  } catch (error) {
    console.log(error);
  }
};

export const createCheckoutSession = async (user, priceId) => {
  try {
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user?.email,
        name: user?.name || user?.firstName + " " + user?.lastName,
        priceId: priceId,
        customerId: user?.customerId,
      }),
    });
    const { sessionId } = await response.json();
    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });
    return sessionId;
  } catch (error) {
    console.log(error);
  }
};
