import React, { useState, useEffect } from "react";
import Project from "./Project";
import config from "../../../config";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";
import AddProject from "../../Modals/NewRule/projects/AddProject";
import ProjectLocally from "./ProjectLocally";

export default function () {
  const [projects, setProjects] = useState([]);
  const [loading, setloading] = useState(false);
  const [addProjectModal, setAddProjectModal] = useState(false);

  function getProjects(){
    if (!loading) {
      setloading(true);
      fetch(config.BASE_URL + "/project", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message) {
          } else {
            setProjects(result);

          }
          setloading(false);
        });
    }
  }
  useEffect(() => {
   getProjects()
  }, []);
  return (
    <div className="flex flex-col justify-start items-center w-[calc(100%-12.5rem)] h-full">
      <AddProject isOpen={addProjectModal} setIsOpen={setAddProjectModal} />
      <div className="relative flex items-center h-[4.375rem] w-full bg-[#F8F9FA] ">
        <div className="text-[#000] font-sem2 font-bold text-[2rem] ml-[1.94rem] mr-[7.5rem]">
          Projects
        </div>
        <div className="relative">
          <input type="text"
            className=" text-[1.25rem] pl-8 pr-4 border border-[#8F8C8C] ml-[1.19rem] w-[29.5rem] h-[2.5rem] rounded-[5.3125rem]"
            placeholder="Search..." />
          <div className="absolute inset-y-2 left-4 pl-3  
                            flex items-center  
                            pointer-events-none">
            <img src={'../../../public/search.png'} className='w-[1rem] h-[1rem] ' />
          </div>
        </div>
        <div
          className="w-[10rem] h-[2.5rem] border rounded-[0.625rem] bg-secondary ml-[7.5rem] absolute right-[1.81rem] flex justify-center items-center cursor-default"
          onClick={() => {
            setAddProjectModal(true);
          }}
        >
          <img
            src="../../../../public/new_project.png"
            className="w-[1.875] h-[1.875rem]"
          ></img>
          <div className="text-[#FFF] text-[1.1rem] ml-[0.62rem] font-sem2">
            New Project
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]">
          <Oval
            visible={true}
            height="60"
            width="60"
            color="#000"
            ariaLabel="oval-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : projects.length > 0 ? (
        <div className="flex flex-col h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]">
          <div className="h-[3.4rem] rounded-t-[0.625rem] bg-[#EEE] flex justify-center items-center font-sem2 text-[1rem] text-[#000] w-full font-bold">
            <div className="w-[50%] pl-[1.06rem]">Project name</div>
            <div className="w-[20%] text-center ">Last scan</div>
            <div className="w-[20%] text-center ">Vulnerabilities</div>
            <div className="w-[10%]"></div>
          </div>

          <div className="overflow-y-scroll h-[28rem] border-b border-l">
            {projects.map((project, index) => (
              <Project
                key={index}
                name={project.name}
                lastScan={project.lastScan}
                vuls={project.vuls}
                id={project.id}
                getProjects={getProjects}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]">
          <div className="h-[3.4rem] rounded-t-[0.625rem] bg-[#EEE] flex justify-center items-center font-sem2 text-[1rem] text-[#000] w-full font-bold">
            <div className="w-[50%] pl-[1.06rem]">Project name</div>
            <div className="w-[20%] text-center ">Last scan</div>
            <div className="w-[20%] text-center ">Vulnerabilities</div>
            <div className="w-[10%]"></div>
          </div>
          <div className="flex flex-col border justify-center items-center h-full">
            <img
              src="../../../public/broken-cable.png"
              className="w-[7rem] h-[7rem]"
            ></img>
            <div className="font-sem2 mt-[2.5rem] text-[1.2rem]">
              No Projects to Found. Please add projects to scan.
            </div>
            <div
              className="w-[18rem] h-[3.0625rem] rounded-[0.625rem] hover:bg-secondary bg-primary text-[#FFF] mt-[1.25rem]  flex justify-center items-center text-[1.1rem] cursor-pointer"
              onClick={() => {
                setAddProjectModal(true);
              }}
            >
              Add Project
            </div>
          </div>
        </div>
        
      )}
    </div>
  );
}
