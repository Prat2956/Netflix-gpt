import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userslice";

const Body = () => {
  const dispath = useDispatch();
  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname,photoURL } = user;
        dispath(addUser({ uid: uid, email: email, displayname: displayname,photoURL:photoURL }));
      } else {
        dispath(removeUser());
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;
