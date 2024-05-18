import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userslice";
import {logo} from "../utils/constant"

const Header = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const user = useSelector((store) => store.user);
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayname: displayname,photoURL:photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmount
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10  flex justify-between">
      <img
        className="w-44"
        src={logo}
        alt="logo"
      />

      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 p-2 m-2"
            alt="user"
            src={user?.photoURL}
          ></img>
          <button onClick={handleSignOut} className=" text-xl font-bold ">
            Sign Out{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
