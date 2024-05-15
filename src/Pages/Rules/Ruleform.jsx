import React, { useState, useEffect } from "react";
import RuleOption from "../../Modals/NewRule/RuleOption";
import Rule from "./Rule";
import config from "../../../config";
import Cookies from "js-cookie";
import { Oval } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import { rule } from "postcss";
export default function Ruleform() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [rules, setRules] = useState([]);
  const [loading, setloading] = useState(false);
  const [search , setSearch] = useState(false)
  const [searchedRules , setSearchedRules] = useState([])
  function getRules() {
    if (!loading) {
      setloading(true);
      fetch(config.BASE_URL + "/rules", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + Cookies.get("token"),
        },
      })
        .then((response) => response.json())
        .then((result) => {
          if (result.message) {
            console.log(result.message);
          } else {
            setRules(result);
          }
          setloading(false);
        });
    }
  }
  function searchInRules()
  { 
    setSearch(true)
    let input = document.getElementById('search-bar').value
    let result= rules.filter(rule => rule.name.toLowerCase().includes(input))
    setSearchedRules(result)

  }
  useEffect(() => {
    getRules();
  }, []);
  return (
    <div className="flex flex-col  justify-start items-center w-[calc(100%-12.5rem)] h-full">
      <RuleOption getRules={getRules} isOpen={uploadModalOpen} setIsOpen={setUploadModalOpen} />
      <div className="relative flex items-center h-[4.375rem] w-full bg-[#F8F9FA] ">
        <div className="text-[#000] font-sem2 font-bold text-[2rem] ml-[1.94rem] mr-[7.5rem]">
          Rules
        </div>
        <div   className="relative">
          <input
            id="search-bar"
            type="text"
            className=" text-[1.25rem] pl-8 pr-4 border border-[#8F8C8C] ml-[1.19rem] w-[29.5rem] h-[2.5rem] rounded-[5.3125rem]"
            placeholder="Search..."
            onChange={searchInRules}
          />
          <div
            className="absolute inset-y-2 left-4 pl-3  
                            flex items-center  
                            pointer-events-none"
          >
            <img
              src={"../../../search.png"}
              className="w-[1rem] h-[1rem] "
            />
          </div>
        </div>
        <div
          className="w-[10rem] h-[2.5rem] border rounded-[0.625rem] bg-secondary ml-[7.5rem] absolute right-[1.81rem] flex justify-center items-center cursor-pointer"
          onClick={() => {
            setUploadModalOpen(true);
          }}
        >
          <img
            src="../../../../new_project.png"
            className="w-[1.875rem] h-[1.875rem]"
          ></img>
          <div className="text-[#FFF] text-[1.1rem] ml-[0.62rem] font-sem2">
            New Rule
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
      ) : rules.length > 0 ? (
        <div className="flex flex-col h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]">
          <div className="font-bold">
            <div className="h-[3.4rem] rounded-t-[0.625rem] bg-[#EEE] flex justify-center items-center font-sem2 text-[1rem] text-[#000] w-full">
              <div className="w-[50%] pl-[1.06rem]">Rule name</div>
              <div className="w-[15%] text-center"></div>
              <div className="w-[15%] text-center">Severity</div>
              <div className="w-[15%] text-center">Private</div>
              <div className="w-[10%]"></div>
            </div>
          </div>
          <div className="overflow-y-scroll h-[25rem] border-b border-l">
            {
              !search?(
                  rules.map((rule, index) => (
                  <Rule
                    key={index}
                    ruleName={rule.name}
                    ruleSeverity={rule.severity}
                    rulePublic={rule.public}
                    uuid={rule.uuid}
                    id={rule.id}
                    getRules={getRules}
                  />
                ))
              )
              :(
                searchedRules.map((rule, index) => (
                  <Rule
                    key={index}
                    ruleName={rule.name}
                    ruleSeverity={rule.severity}
                    rulePublic={rule.public}
                    uuid={rule.uuid}
                    id={rule.id}
                    getRules={getRules}
                  />
                ))
              )
            }
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]">
          <div className="font-bold">
            <div className="h-[3.4rem] rounded-t-[0.625rem] bg-[#EEE] flex justify-center items-center font-sem2 text-[1rem] text-[#000] w-full">
              <div className="w-[50%] pl-[1.06rem]">Rule name</div>
              <div className="w-[15%] text-center"></div>
              <div className="w-[15%] text-center">Severity</div>
              <div className="w-[15%] text-center">Private</div>
              <div className="w-[10%]"></div>
            </div>
          </div>
          <div className="flex flex-col border justify-center items-center h-full">
            <img
              src="../../../broken-cable.png"
              className="w-[8rem] h-[8rem]"
            ></img>
            <div className="font-sem2 mt-[2.5rem] text-[1.2rem]">
              No Rules to Found. Please add Rule to apply.
            </div>
            <div
              className="w-[18rem] h-[3.0625rem] rounded-[0.625rem] hover:bg-secondary bg-primary text-[#FFF] mt-[1.25rem]  flex justify-center items-center text-[1.1rem] cursor-pointer"
              onClick={() => {
                setUploadModalOpen(true);
              }}
            >
              Add Rule

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
