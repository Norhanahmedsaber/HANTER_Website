import React, { useState } from "react";
import ComboBox from "./ComboBox";
import Checkbox from "@mui/material/Checkbox";

export default function ProjectBar() {
  const options = ["toka", "hussien", "s7s"];
  const [rules, setRules] = useState([]);
  const [highSeverityCheck, setHighSeverityCheck] = useState(false);
  const [meduiemSeverityCheck, setMeduimSeverityCheck] = useState(false);
  const [lowSeverityCheck, setLowSeverityCheck] = useState(false);

  return (
    <div className="w-[18.75rem] border h-[40%] flex  flex-col justify-between">
      <div className="text-[1.5625rem] ml-[1.25rem] mt-[1.25rem] font-sem2 text-[#504F4F]">
        Project Name
      </div>
      <div className="flex flex-col">
        <div className="ml-[1.25rem] text-[1.25rem] text-[#504F4F] font-sem2">
          Severity
        </div>
        <div className="flex justify-between items-center">
          <div className=" flex justify-start items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] ml-[1.25rem] cursor-pointer">
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }}
              onChange={(e) => {
                setHighSeverityCheck(e.target.checked);
              }}
            ></Checkbox>
            <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-red-500 "></div>
            <div className="text-[0.825rem] mb-[0.13rem] ">High</div>
          </div>
          <div className=" flex justify-start items-center w-[5.9rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] cursor-pointer">
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }}
              onChange={(e) => {
                setMeduimSeverityCheck(e.target.checked);
              }}
            ></Checkbox>
            <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-yellow-400 "></div>
            <div className="text-[0.825rem] mb-[0.13rem] ">Medium</div>
          </div>
          <div className=" flex justify-start items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] mr-[1.25rem] cursor-pointer">
            <Checkbox
              sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }}
              onChange={(e) => {
                setLowSeverityCheck(e.target.checked);
              }}
            ></Checkbox>
            <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-blue-600"></div>
            <div className="text-[0.825rem] mb-[0.13rem] ">Low</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col border mb-[3rem] ">
        <div className="ml-[1.25rem] text-[1.25rem] text-[#504F4F] font-sem2">
          Rules
        </div>
        <ComboBox options={options} rules={rules} setRules={setRules} />
      </div>
    </div>
  );
}
