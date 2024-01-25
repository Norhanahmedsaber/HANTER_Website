import React, { useState, useEffect } from "react";
import RuleOption from "../../Modals/NewRule/RuleOption";
import Rule from "./Rule";
import config from "../../../config";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Ruleform() {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [rules, setRules] = useState([]);
  function getRules() {
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
      });
  }
  useEffect(() => {
    getRules();
  }, []);
  return (
    <div className="flex flex-col  justify-start items-center w-[calc(100%-17.125rem)] h-full">
      <RuleOption isOpen={uploadModalOpen} setIsOpen={setUploadModalOpen} />

      <div className="border flex justify-center items-center h-[6.5rem] w-full bg-[#F8F9FA]">
        <div className="text-[#000] font-Jomolhari text-[2.6875rem] ml-[1.94rem] mr-[7.5rem]">
          Rules
        </div>
        <div class="relative">
          <input
            type="text"
            class=" text-[1.25rem] pl-10 pr-4 py-2 border border-[#8F8C8C] mt-[0.69rem] ml-[1.19rem] w-[29.5rem] h-[3.3125rem] rounded-[5.3125rem]"
            placeholder="Search"
          />
          <div
            class="absolute inset-y-9 left-4 pl-3  
                            flex items-center  
                            pointer-events-none"
          >
            <img
              src={"../../../public/search.png"}
              className="w-[1.5rem] h-[1.5rem] "
            />
          </div>
        </div>
        <div className="w-[15.1875rem] h-[3.8125rem] border rounded-[0.625rem] bg-secondary mr-[1.81rem] ml-[7.5rem] flex justify-center items-center">
          <img
            src="../../../../public/new_project.png"
            className="w-[2.4375rem] h-[2.4375rem]"
          ></img>
          <div
            className="text-[#FFF] text-[1.25rem] ml-[1.25rem] font-Jomolhari"
            onClick={() => {
              setUploadModalOpen(true);
            }}
          >
            New Rule
          </div>
        </div>
      </div>
      <div className="flex flex-col h-[42.9375rem] w-[calc(100%-3.5rem)] mt-[2.25rem]">
        <div className="h-[5.5625rem] rounded-t-[0.625rem] bg-[#EEE] flex justify-center items-center font-Jomolhari text-[1.25rem] text-[#000] w-full">
          <div className="w-[40%] pl-[1.06rem]">Rule name</div>
          <div className="w-[15%] text-center">Last Edit</div>
          <div className="w-[15%] text-center">Severity</div>
          <div className="w-[15%] text-center">Private</div>
          <div className="w-[15%]"></div>
        </div>
        {rules.map((rule) => (
          <Rule
            ruleName={rule.name}
            uuid={rule.uuid}
            id={rule.id}
            getRules={getRules}
          />
        ))}
      </div>
    </div>
  );
}
