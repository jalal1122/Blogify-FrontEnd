import { MdAdd } from "react-icons/md";
import { useSelector } from "react-redux";

const AddAPost = () => {
  const textColor = useSelector((state) => state.color.colors.textColor);
  const primaryColor = useSelector((state) => state.color.colors.primaryColor);
  return (
    <div className="flex flex-row gap-5 justify-center items-center my-15 mx-auto">
      <button
        className={`px-6 py-3 rounded-2xl text-3xl font-bold hover:scale-105 cursor-pointer transition-all duration-300 `}
        style={{
          color: textColor,
          backgroundColor: primaryColor,
        }}
      >
        Post Your Thoughts
      </button>
    </div>
  );
};

export default AddAPost;
