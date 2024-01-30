import React, { useEffect , useState} from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProjectBar from "./ProjectBar";
import MatchingSide from "./MatchingSide";
import config from "../../../config";
import Cookies from "js-cookie";

export default function Reports(projectId) {
  
  const [error, setError] = useState("")
  const [reports , setReports] = useState([])

  function loadReports()
  {
      fetch(config.BASE_URL+'/reports'+projectId,{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+Cookies.get('token')
        }
      }).then(response => response.json())
      .then((result)=>{
        if(result.message){
          setError(result.message)
        }else{
          setReports(reports)
        }
      })
  }
  useEffect(()=>{
    loadReports()
  },[])
  return (
    <div className="flex justify-start w-screen h-screen items-start">
      <Sidebar />
      <div className=" w-[calc(100%-12.5rem)] h-full flex flex-col">
        <div className="border border-b-[#8F8C8C] h-[3.65rem] flex justify-between  items-center">
          <div className="ml-[1.25rem] text-[2.3rem] font-sem2">Reports</div>
          <div className="relative">
            <div className="w-[9.375rem] h-[2.5rem] bg-secondary rounded-[0.625rem] mr-[1.25rem] flex justify-center items-center cursor-pointer">
              <div className="text-[1.4rem] text-[#FFF] ml-[2rem] font-sem2 ">
                Re-Scan
              </div>
              <div
                className="absolute left-3
                          flex items-center  
                          pointer-events-none"
              >
                <img
                  src={"../../../public/scan-code.png"}
                  className="w-[1.7rem] h-[1.7rem] "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full bg-[#EAEAEA]">
          <div className="border border-r-[#8F8C8C]">
            <ProjectBar />
          </div>
          <div className="w-[calc(100%-18.75rem)]  flex flex-col">
            <div className="h-[3.125rem] flex justify-start items-center ">
              <div className="ml-[2.25rem] text-[1.25rem] text-[#000] font-sem2 font-semibold">
                70 matching found
              </div>
            </div>
            {
              reports.map((report)=> <MatchingSide ruleName={report.rule_name} filepath={report.filepath} line={report.line} col={report.col}/>)
            }
            <MatchingSide />
          </div>
        </div>
      </div>
    </div>
  );
}
