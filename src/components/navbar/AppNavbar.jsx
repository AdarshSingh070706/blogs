import React, { useState, useContext } from "react";
import {
  Navbar as MTNavbar,
  Typography,
  IconButton,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShareAlt } from "react-icons/ai";
import myContext from "../../context/data/myContext";
import SearchDialog from "../searchDialog/SearchDialog";
import ShareDialogBox from "../shareDialogBox/ShareDialogBox";
import LogoutBtn from "./LogoutBtn";
import { useSelector } from "react-redux";
import { BsSun, BsMoon } from "react-icons/bs";

export default function AppNavbar() {
  const authStatus = useSelector((state) => state.auth.status);
  const { mode, toggleMode } = useContext(myContext);
  const [openNav, setOpenNav] = useState(false);

  const navItems = [
    { name: "Home", slug: "/", show: true },
    { name: "Blogs", slug: "/allblogs", show: authStatus },
    { name: "Admin Login", slug: "/adminlogin", show: !authStatus },
    { name: "Signup", slug: "/signup", show: !authStatus },
    {name: "AllBlogs", slug: "/allblog", show: authStatus}
  ];

  const brandGradient =
    mode === "dark"
      ? "bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500"
      : "bg-gradient-to-r from-orange-400 via-pink-400 to-purple-500";

  return (
    <MTNavbar
      className="sticky top-0 z-20 py-2 lg:px-8 lg:py-2"
      style={{
        background:
          mode === "dark"
            ? "linear-gradient(135deg, rgba(30,41,59,1) 0%, rgba(39,56,91,1) 100%)"
            : "linear-gradient(135deg, rgba(48,51,107,1) 0%, rgba(66,78,176,1) 100%)",
      }}
    >
      <div className="flex items-center justify-between">
        {/* Brand */}
        <Link to={'/'}>
  <Typography
    as="a"
    className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center text-white transition duration-300 hover:text-blue-400"
  >
    {/* Logo Image */}
    <img
      className="w-10 h-10 rounded-full border-2 border-white"
      src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png"
      alt="Creator"
    />
    {/* Logo Text */}
    <span>Creator</span>
  </Typography>
</Link>


        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:space-x-8 font-medium">
          {navItems
            .filter((i) => i.show)
            .map((i) => (
              <Link
                key={i.slug}
                to={i.slug}
                className={mode === "light" ? "text-gray-200" : "text-white"}
              >
                {i.name}
              </Link>
            ))}
          {authStatus && <LogoutBtn />}
        </div>

        {/* Right controls */}
        <div className="flex items-center space-x-4 ">
          <SearchDialog />
          <div className="hidden lg:block">
            <ShareDialogBox />
          </div>
          <Link to="/dashboard">
            <Avatar
              src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
              alt="avatar"
              withBorder
              className="w-10 h-10 p-0.5 hover:scale-105 transition-transform duration-300"
              style={{
                border:
                  mode === "dark"
                    ? "2px solid rgb(226,232,240)"
                    : "2px solid rgb(30,41,59)",
              }}
            />
          </Link>

          {/* Dark/Light toggle (icon just for demo) */}
         <IconButton
  onClick={toggleMode}
  className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
>
  {mode === "light" ? (
    <BsMoon className="w-5 h-5" />
  ) : (
    <BsSun className="w-5 h-5" />
  )}
</IconButton>

          {/* Mobile menu button */}
          <IconButton
            className="lg:hidden h-10 w-10 text-inherit rounded-lg"
            ripple={false}
            onClick={() => setOpenNav((v) => !v)}
          >
            {openNav ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </IconButton>
        </div>
      </div>

      {/* Mobile Nav */}
      <Collapse open={openNav} className="lg:hidden mt-2">
        <ul className="flex flex-col space-y-2 font-medium">
          {navItems
            .filter((i) => i.show)
            .map((i) => (
              <li key={i.slug}>
                <Link
                  to={i.slug}
                  className={mode === "light" ? "text-black" : "text-white"}
                  onClick={() => setOpenNav(false)}
                >
                  {i.name}
                </Link>
              </li>
            ))}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </Collapse>
    </MTNavbar>
  );
}
