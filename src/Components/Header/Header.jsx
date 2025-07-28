import { useSelector } from "react-redux";
import RightSideIcons from "./RightSideIcons";
import SearchBar from "./SearchBar";

const Header = () => {
  // Initialize Redux dispatch and selectors
  // to access color state and mode
  const bgColor = useSelector((state) => state.color.colors.bgColor);
  const textColor = useSelector((state) => state.color.colors.textColor);

  // render the header component
  return (
    <>
      <header
        className="App-header flex justify-between items-center w-[1200px] p-3 mx-auto"
        style={{
          color: textColor,
        }}
      >
        {/* Logo Div */}
        <div className="div">
          <h1
            className="font-bold text-4xl"
            style={{
              color: textColor,
              cursor: "pointer",
            }}
          >
            Blogify
          </h1>
        </div>

        {/* Nav Links Div */}
        <div className="div">
          <ul className="flex justify-between items-center gap-4 font-semibold text-lg">
            <li
              style={{
                color: textColor,
                cursor: "pointer",
              }}
            >
              Home
            </li>
            <li
              style={{
                color: textColor,
                cursor: "pointer",
              }}
            >
              MyBlogs
            </li>
          </ul>
        </div>

        {/* Search  */}
        <SearchBar />

        {/* Icons */}
        <RightSideIcons />
      </header>
    </>
  );
};

export default Header;
