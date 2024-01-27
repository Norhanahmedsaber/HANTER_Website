import React, { useState } from "react";
import DeleteProject from "../../Modals/NewRule/projects/DeleteProject";
import {toast} from 'react-toastify'
export default function Project({ name, lastScan, vuls, id , getProjects }) {
  const [uploadModelOpen, setUploadModelOpen] = useState(false);
  const close = (status) => {
    if(status == "deleted") {
      toast("Rule Deleted Successfully!")
    }
    setUploadModelOpen(false);
  }
  return (
    <div className="h-[2.8rem] flex justify-center items-center font-sem2 text-[1rem] text-[#000] hover:bg-[#eeeeee] cursor-pointer w-full">
      <DeleteProject
        isOpen={uploadModelOpen}
        setIsOpen={setUploadModelOpen}
        id={id}
        getProjects={getProjects}
        close= {close}
      />
      <div className="w-[50%] pl-[1.06rem]">{name}</div>
      <div className="w-[20%] text-center">{lastScan}</div>
      <div className="w-[20%] text-center">{vuls}</div>
      <div
        className="w-[10%] flex justify-center cursor-pointer"
        onClick={() => {
          setUploadModelOpen(true);
        }}
      >
        <img
          src="../../../../public/delete.png"
          className="w-[1.25rem] h-[1.25rem] cursor-pointer"
        ></img>
      </div>
    </div>
  );
}
