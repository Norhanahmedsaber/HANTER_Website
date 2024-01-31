import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProjectBar from "./ProjectBar";
import MatchingSide from "./MatchingSide";
import config from "../../../config";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { rule } from "postcss";

export default function Reports() {
  const { id } = useParams()
  const [error, setError] = useState("")
  const [reports, setReports] = useState([])
  const [projectRules, setProjectRules] = useState([])
  function clacMatches(reports) {
    let matchedNum = 0
    reports.map((report) => matchedNum += report.reports.length)
    return matchedNum
  }
  function getProjectRules() {
    fetch(config.BASE_URL + '/project_rules/' + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Cookies.get('token')
      }
    }).then(response => response.json())
      .then((result) => {
        if (result.message) {

        }
        else {
          setProjectRules(result)
        }
      })
  }
  async function rescan(){
    const response= await fetch(config.BASE_URL+'/rescan/'+id,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: Cookies.get('token')
      },
    })
      const result=await response.json()
      if(result.message){
      setError(result.message)
    }else{
      loadReports()
      getProjectRules()
    }
  }
  function loadReports() {
    fetch(config.BASE_URL + '/reports/' + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + Cookies.get('token')
      }
    }).then(response => response.json())
      .then((result) => {
        if (result.message) {
          setError(result.message)
        } else {
          setReports(result)
        }
      })
  }
  useEffect(() => {
    loadReports()
    getProjectRules()
  }, [])
  return (
    <div className="flex justify-start w-screen h-screen items-start">
      <Sidebar />
      <div className=" w-[calc(100%-12.5rem)] h-full flex flex-col">
        <div className="border border-b-[#8F8C8C] h-[3.65rem] flex justify-between  items-center">
          <div className="ml-[1.25rem] text-[2.3rem] font-sem2">Reports</div>
          <div className="relative">
            <div className="w-[9.375rem] h-[2.5rem] bg-secondary rounded-[0.625rem] mr-[1.25rem] flex justify-center items-center cursor-pointer">
              <div className="text-[1.4rem] text-[#FFF] ml-[2rem] font-sem2 " onClick={()=>{rescan()}}>
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
            <ProjectBar projectRules={projectRules} />
          </div>
          <div className="w-[calc(100%-18.75rem)]  flex flex-col">
            <div className="h-[3.125rem] flex justify-start items-center ">
              <div className="ml-[2.25rem] text-[1.25rem] text-[#000] font-sem2 font-semibold">
                {clacMatches(reports)} matching found
              </div>
            </div>
            {
              reports.map((report) => <MatchingSide reportsArr={report} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}
