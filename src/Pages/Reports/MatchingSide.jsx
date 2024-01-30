import React from "react";

export default function MatchingSide({ruleName , filePath ,  line , col }) {
  return (
    <div className="flex justify-center mt-[1.25rem] ">
      <div className="w-[95%] h-[20rem] rounded-[0.625rem] bg-[#fff] overflow-scroll">
        <div className="h-[5rem] border-b-[0.25px]  border-b-[#8F8C8C] flex justify-between ">
          <div className="flex flex-col w-[60%] ">
            <div className="text-[1.25rem] text-[#000] font-sem2 pl-[0.88rem]">
              {ruleName}
            </div>
            <div
              className="px-[0.88rem] text-[0.9rem] w-full overflow-hidden"
              title={
                "Detected a sequelize statement that is tainted by user-input. This could lead to SQL injection if the variable is user-controlled and is not properly sanitized. In order to prevent SQL injection, it is recommended to use"
              }
            >
              Detected a sequelize statement that is tainted by user-input. This
              could lead to SQL injection if the variable is user-controlled and
              is not properly sanitized. In order to prevent SQL injection, it
              is recommended to use
            </div>
          </div>
          <div className="flex  justify-between items-center w-[30%]">
            <div className="flex flex-col justify-center items-center ">
              <div className="text-[0.9375rem] font-sem2">Matching</div>
              <div className="  justify-center flex items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C]  ">
                <div className="text-[0.625rem] font-sem2">7</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="text-[0.9375rem] font-sem2">Language</div>
              <div className="  justify-center flex items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C]  ">
                <div className="text-[0.625rem] font-sem2">javaScript</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mr-[0.75rem]">
              <div className="text-[0.9375rem] font-sem2">Severity</div>
              <div className=" flex justify-center items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] ">
                <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-blue-600 mr-[0.44rem] ml-[0.5rem]"></div>
                <div className="text-[0.825rem] mb-[0.13rem] ">Low</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[1.9625rem] pl-4 border border-b-[#8F8C8C]">
          {filePath}
        </div>
      </div>
    </div>
  );
}
