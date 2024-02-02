import React, { useEffect, useState } from "react";
import Report from "./Report";

export default function MatchingSide({ reportsArr, projectRules, lowSeverityCheck, highSeverityCheck, meduiemSeverityCheck, url }) {
  function description(arr) {
    let rules = []
    arr.map((option) => rules.push(arr.url))
    return rules
  }
  
  function goToRepo(filePath, line) {
    // console.log(url +'/blob/master/' + filePath + '#L' + line, '_blank')
    window.open(url +'/blob/master/' + filePath + '#L' + line, '_blank')
  }
  return (
    <div className="flex justify-center mt-[1.25rem] ">
      <div className="w-[95%] h-[20rem] rounded-[0.625rem] overflow">
        <div className="h-[5rem] border-b-[0.25px]  border-b-[#8F8C8C] bg-[#296c99] rounded-t-md flex justify-between ">
          <div className="flex flex-col w-[60%] text-white rounded-tl-md">
            <div className="text-[1.5rem] font-bold font-sem2 pt-[0.6rem] pl-[0.88rem]">
              {reportsArr.rule_name}
            </div>
            <div
              className="px-[0.88rem] text-[1.1rem] w-full  overflow-hidden"
              title={
                "Detected a sequelize statement that is tainted by user-input. This could lead to SQL injection if the variable is user-controlled and is not properly sanitized. In order to prevent SQL injection, it is recommended to use"
              }
            >
              {reportsArr.reports[0].message}
            </div>
          </div>
          <div className="flex  justify-between items-center w-[30%] font-bold">
            <div className="flex flex-col justify-center items-center ">
              <div className="text-[0.9375rem] font-sem2 text-white">Matching</div>
              <div className="  justify-center flex items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C]  ">
                <div className="text-[0.825rem] font-sem2">{reportsArr.reports.length}</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="text-[0.9375rem] font-sem2 text-white">Language</div>
              <div className="  justify-center flex items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C]  ">
                <div className="text-[0.625rem] font-sem2">javaScript</div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mr-[0.75rem]">
              <div className="text-[0.9375rem] font-sem2 text-white">Severity</div>
              <div className=" flex justify-center items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] ">
                <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-blue-600 mr-[0.44rem] ml-[0.5rem]"></div>
                <div className="text-[0.825rem] mb-[0.13rem] ">Low</div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-y-scroll h-[70%]">
          {
            reportsArr.reports.map((report) => <Report goToRepo={goToRepo} filePath={report.filepath} line={report.line} col={report.col} />)
          }
        </div>
      </div>
    </div>
  );
}
