import React, { useState } from "react";
import Report from "./Report";
export default function MatchingSide({reports}) {
  
  return (
    <div className="flex justify-center mt-[1.25rem] ">
      {
        reports.map((report)=><Report ruleName={report.rule_name} reports={report.reports}/>)
      }
    </div>
  );
}
