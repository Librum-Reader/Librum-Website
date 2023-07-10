import React from "react";

export default function RegisterPopup({ openPopup, setOpenPopup }) {
  if (!openPopup) {
    return null;
  }
  return (
    <div className="registerPopupContainer">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.NxQ50lGPdzKR6gF3NIj9DwHaHa&pid=Api&P=0&h=180"
        alt="check icon"
      ></img>
      <p>Thanks for registering!</p>
      <p>You will receive a response shortly.</p>
      <button onClick={() => setOpenPopup(false)}>Ok</button>
    </div>
  );
}
