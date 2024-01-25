import React from "react";
import Modal from "react-modal";

export default function AddProject({ isOpen, setIsOpen }) {
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className=" flex flex-col justify-center items-center">
      <Modal
        isOpen={isOpen}
        appElement={document.getElementById("roor")}
        className={
          " transition: opacity 2000ms ease-in-out shadow-xl shadow-slate-300 bg-[#EEE] h-[27.25rem] w-[50rem]  left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 absolute flex flex-col justify-between items-center rounded-[0.3125rem] text-black"
        }
        shouldFocusAfterRender={false}
        onRequestClose={close}
        closeTimeoutMS={200}
        ReactModal__Overlay
      >
        <div className="felx w-[28.815rem] h-[3.5rem] mt-[2.37rem]  text-[1.8rem] font-Jomolhari flex-row justify-center items-center">
          How do you want to scan?
        </div>
        <div className=" flex justify-center items-center h-full w-full">
          <div className="bg-[#FFF] flex flex-col justify-center items-center h-[15.75rem]  w-[17.5rem] bg-opacity-70 text-black hover:cursor-pointer rounded-[1.25rem]">
            <img
              className="w-[4.375rem] h-[4.6875rem] "
              src="../../../public/uploadYaml.png"
            ></img>
            <div className="font-Jomolhari mt-[0.31rem] text-[1.5rem]">
              Locally
            </div>
            <div className="text-[1rem] mt-[0.63rem] text-center font-Jomolhari">
              Upload Project Locally <br></br> from your device.
            </div>
          </div>
          <div className="w-[6.35rem]"></div>
          <div
            className="bg-[#FFF] flex flex-col justify-center items-center h-[15.75rem] w-[17.5rem] bg-opacity-70 text-black hover:cursor-pointer rounded-[1.25rem]"
            onClick={() => {
              close();
            }}
          >
            <img
              className="w-[4.375rem] h-[4.6875rem] "
              src="../../../public/github.png"
            ></img>
            <div className="font-Jomolhari mt-[0.31rem] text-[1.5rem]">
              Github
            </div>
            <div className="text-[1rem] mt-[0.63rem] text-center font-Jomolhari">
              Scan repository using <br></br> git-hub actions.
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
