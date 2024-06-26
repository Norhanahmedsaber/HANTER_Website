import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProjectBar from "./ProjectBar";
import MatchingSide from "./MatchingSide";
import config from "../../../config";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import ComboBox from "./ComboBox";
import Checkbox from "@mui/material/Checkbox";
import {useNavigate} from 'react-router-dom'
export default function Reports() {
  const [rules, setRules] = useState([]);
  const [highSeverityCheck, setHighSeverityCheck] = useState(false);
  const [meduiemSeverityCheck, setMeduimSeverityCheck] = useState(false);
  const [lowSeverityCheck, setLowSeverityCheck] = useState(false);
  const { id, name } = useParams()
  const [error, setError] = useState("")
  const [reports, setReports] = useState([])
  const [projectRules, setProjectRules] = useState([])
  const [project, setProject] = useState({})
  const nav = useNavigate()

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
  async function getProject() {
    const response = await fetch(config.BASE_URL + '/project/' + id, {
      headers: {
        "Authorization": Cookies.get('token')
      }
    })
    const result = await response.json()
    if(result.message) {
      nav('./notfound')
    }else {
      setProject(result)
    }
  }
  useEffect(() => {
    loadReports()
    getProjectRules()
    getProject()
  }, [])
  return (
    <div className="flex justify-start w-screen h-screen items-start">
      <Sidebar />
      <div className=" w-[calc(100%-12.5rem)] h-full flex flex-col overflow-hidden">
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
                  src={"../../../scan-code.png"}
                  className="w-[1.7rem] h-[1.7rem] "
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-full bg-[#EAEAEA]">
          <div className="border border-r-[#8F8C8C]">
            <div className="w-[18.75rem] border h-[40%] flex  flex-col justify-between">
              <div className="text-[1.5625rem] ml-[1.25rem] mt-[1.25rem] font-sem2 text-[#504F4F]">
                {name}
              </div>
              <div className="flex flex-col">
                <div className="ml-[1.25rem] text-[1.25rem] text-[#504F4F] font-sem2">
                  Severity
                </div>
                <div className="flex justify-between items-center">
                  <div className=" flex justify-center font-bold items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] ml-[1.25rem] cursor-pointer">
                    <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-red-500 "></div>
                    <div className="text-[0.825rem] mb-[0.13rem] ml-2 ">Error</div>
                  </div>
                  <div className=" flex justify-center items-center w-[5.9rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] cursor-pointer">
                    <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-yellow-400 "></div>
                    <div className="text-[0.825rem] mb-[0.13rem] ml-2 font-bold">Warning</div>
                  </div>
                  <div className=" flex justify-center items-center w-[5rem] h-[1.25163rem] bg-[#FFF] rounded-[3.125rem] border-[0.25px] border-[#8F8C8C] mr-[1.25rem] cursor-pointer">
                    <div className="rounded-full w-[0.5rem] h-[0.5rem] bg-blue-600"></div>
                    <div className="text-[0.825rem] mb-[0.13rem] ml-2 font-bold">Info</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-[3rem] ">
                <div className="ml-[1.25rem] text-[1.25rem] text-[#504F4F] font-sem2">
                  Rules
                </div>
                <ComboBox options={projectRules} rules={rules} setRules={setRules} />
              </div>
            </div>
          </div>
          <div className="w-[calc(100%-18.75rem)]  flex flex-col">
            <div className="h-[3.125rem] flex justify-start items-center ">
              <div className="ml-[2.25rem] text-[1.25rem] text-[#000] font-sem2 font-semibold">
                {clacMatches(reports)} matching found
              </div>
            </div>
            <div className="h-[80%] overflow-y-scroll">
            {
              reports.map((report) => <MatchingSide url={project.url} reportsArr={report} projectRules={projectRules} highSeverityCheck={highSeverityCheck} lowSeverityCheck={lowSeverityCheck} meduiemSeverityCheck={meduiemSeverityCheck} />)
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
