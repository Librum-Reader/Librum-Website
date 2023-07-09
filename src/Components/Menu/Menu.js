import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export const Menu = ({ setShow }) => {
  return (
    <div className="modal-sm">
      <div className="menu-modal">
        <ul>
          <li
            to={"./"}
            onClick={() => {
              setShow(false);
            }}
          >
            <i className="fa fa-close fa-2x"></i>
          </li>
          <Link
            to={"./"}
            onClick={() => {
              setShow(false);
            }}
          >
            <li>Home</li>
          </Link>
          <Link
            to={"./support"}
            onClick={() => {
              setShow(false);
            }}
          >
            <li>Support</li>
          </Link>{" "}
          <Link
            to={"./news"}
            onClick={() => {
              setShow(false);
            }}
          >
            <li>News</li>
          </Link>
          <Link
            to={"./login"}
            onClick={() => {
              setShow(false);
            }}
          >
            <li>Log in</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
