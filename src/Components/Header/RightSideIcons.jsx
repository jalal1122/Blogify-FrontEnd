import { FaSearch, FaUser, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { getMode } from "../../features/Colors/colorSlice.js";

const RightSideIcons = () => {
  const [isUserLoggedIn, setisUserLoggedIn] = useState(false);

  // Initialize Redux dispatch and selectors
  // to access color state and mode
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.color.mode);
  const textColor = useSelector((state) => state.color.colors.textColor);

  const toggleTheme = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    localStorage.setItem("mode", newMode);
    dispatch(getMode(newMode));
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setisUserLoggedIn(true);
    }
  }, [isUserLoggedIn]);

  return (
    <div className="flex justify-between items-center gap-4">
      {isUserLoggedIn ? (
        <FaSignOutAlt
          size={25}
          className="hover:scale-110 transition-transform duration-300"
          style={{
            color: textColor,
            cursor: "pointer",
          }}
        />
      ) : (
        <>
          <MdLogin
            size={25}
            className="hover:scale-110 transition-transform duration-300"
            style={{
              color: textColor,
              cursor: "pointer",
            }}
          />
          <FaUser
            size={25}
            className="hover:scale-110 transition-transform duration-300"
            style={{
              color: textColor,
              cursor: "pointer",
            }}
          />
        </>
      )}

      <button
        onClick={toggleTheme}
        className="text-xl hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
      >
        {mode === "dark" ? <FaSun size={25} /> : <FaMoon size={25} />}
      </button>
    </div>
  );
};

export default RightSideIcons;
