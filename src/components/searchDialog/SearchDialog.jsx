import { Fragment, useContext, useState } from "react";
import {
  Dialog,
  DialogBody,
  Input,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const context = useContext(myContext);
  const { mode } = context;

  return (
    <Fragment>
      {/* Search Icon */}
      <div
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        className="cursor-pointer p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
        title="Search"
      >
        <AiOutlineSearch size={22} color="white" />
      </div>

      {/* Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        className="sm:max-w-lg w-[90%] sm:mx-auto mt-10 rounded-xl shadow-lg font-sans"
        style={{
          background: mode === "light" ? "linear-gradient(145deg, #f1f2f6, #e0e0e0)" : "linear-gradient(145deg, #2f3542, #485460)",
          color: mode === "dark" ? "white" : "black",
          WebkitFontSmoothing: "antialiased", // helps on Windows
          MozOsxFontSmoothing: "grayscale",
        }}
      >
        <DialogBody className="overflow-y-auto max-h-[80vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {/* Input */}
          <div className="flex justify-center mb-6">
            <Input
              color="white"
              type="search"
              label="Search for blogs..."
              className="bg-[#2C3A47] text-white placeholder-white rounded-md shadow-md w-full sm:w-[350px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              name="searchkey"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
          </div>

          {/* Blog Card */}
          <div className="flex justify-center flex-wrap gap-6 mb-6">
            <div className="bg-white shadow-xl p-5 rounded-lg w-full sm:w-1/2 md:w-1/3 text-black hover:shadow-2xl transition duration-300 ease-in-out">
              <img
                className="w-full h-40 object-cover rounded-md mb-4"
                src="https://via.placeholder.com/350x200"
                alt="Blog Thumbnail"
              />
              <p className="text-sm text-gray-600 mb-2">12 Apr 2025</p>
              <h1 className="font-semibold text-lg leading-tight text-blue-600 hover:text-blue-500 transition duration-300 ease-in-out">React Introduction</h1>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 font-medium mt-6">
            <h1>Powered by Adarsh</h1>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
