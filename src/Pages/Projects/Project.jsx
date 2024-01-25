import React, { useState } from "react";
import DeleteProject from "../../Modals/NewRule/projects/DeleteProject";
export default function Project({ name, lastScan, vuls, id }) {
  const [uploadModelOpen, setUploadModelOpen] = useState(false);

  return (
    <div className="h-[4.6875rem] flex justify-center items-center font-Jomolhari text-[1.25rem] text-[#000] w-full">
      <DeleteProject
        isOpen={uploadModelOpen}
        setIsOpen={setUploadModelOpen}
        id={id}
      />
      <div className="w-[50%] pl-[1.06rem]">{name}</div>
      <div className="w-[20%] text-center">{lastScan}</div>
      <div className="w-[15%] text-center">{vuls}</div>
      <div
        className="w-[15%] flex justify-center cursor-pointer"
        onClick={() => {
          setUploadModelOpen(true);
        }}
      >
        <img
          src="../../../../public/delete.png"
          className="w-[1.875rem] h-[1.875rem] cursor-pointer"
        ></img>
      </div>
    </div>
  );
}
