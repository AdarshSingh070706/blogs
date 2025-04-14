import { Fragment, useContext, useState } from "react";
import {
  Dialog,
  DialogBody,
  Button,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext";
import {
  AiOutlineShareAlt,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiFillFacebook,
  AiOutlineWhatsApp,
  AiOutlineCopy,
} from "react-icons/ai";

export default function ShareDialogBox() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleOpen = () => setOpen(!open);
  const context = useContext(myContext);
  const { mode } = context;

  const iconColor = mode === "dark" ? "text-white" : "text-gray-800";
  const currentUrl = window.location.href;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Hide tooltip after 2 seconds
  };

  return (
    <Fragment>
      {/* Share Icon Button */}
      <div
        className="ml-auto cursor-pointer p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition duration-300 ease-in-out transform hover:scale-110"
        onClick={handleOpen}
        role="button"
        tabIndex={0}
        title="Share"
      >
        <AiOutlineShareAlt className="text-white" size={22} />
      </div>

      {/* Share Dialog */}
      <Dialog
        open={open}
        handler={handleOpen}
        className={`sm:max-w-md w-[90%] mx-auto mt-10 rounded-xl shadow-xl font-sans transition-all duration-300 ease-in-out ${
          mode === "dark"
            ? "bg-gradient-to-br from-[#2f3542] to-[#1e272e] text-white"
            : "bg-gradient-to-br from-gray-100 to-white text-black"
        }`}
      >
        <DialogBody className="py-6 px-5">
          {/* Social Icons */}
          <div className="flex justify-center gap-6 flex-wrap mb-6">
            <a
              href="https://www.linkedin.com/in/adarsh-singh-37596a238"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} hover:text-blue-600 transition-transform transform hover:scale-125`}
            >
              <AiFillLinkedin size={35} />
            </a>
            <a
              href="https://www.instagram.com/mr_adarshsingh02/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} hover:text-pink-500 transition-transform transform hover:scale-125`}
            >
              <AiFillInstagram size={35} />
            </a>
            <a
              href="https://github.com/AdarshSingh070706"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} hover:text-black dark:hover:text-white transition-transform transform hover:scale-125`}
            >
              <AiFillGithub size={35} />
            </a>
            <a
              href="https://www.facebook.com/adarsh.fb"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} hover:text-blue-500 transition-transform transform hover:scale-125`}
            >
              <AiFillFacebook size={35} />
            </a>
            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${iconColor} hover:text-green-500 transition-transform transform hover:scale-125`}
            >
              <AiOutlineWhatsApp size={35} />
            </a>
          </div>

          {/* Copy Link Button */}
          <div className="flex justify-center mb-4">
            <Button
              onClick={copyToClipboard}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-2 px-5 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <AiOutlineCopy size={20} />
              {copied ? "Copied!" : "Copy Link"}
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            <p>Powered by Adarsh 🚀</p>
          </div>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
