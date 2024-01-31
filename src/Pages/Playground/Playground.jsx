import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ListRules from "./ListRules";
import RuleEditor from "./RuleEditor";
import SourceEditor from "./SourceEditor";
import { savaAs, saveAs } from "file-saver";
import Reports from "../Reports/Reports";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import config from "../../../config";
export default function Playground() {
  const [rule, setRule] = useState("");
  const [source, setSource] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [reports, setReports] = useState([])
  const nav = useNavigate();
  const run = async () => {
    const response = await fetch(config.BASE_URL + '/playground', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rule,
        source
      })
    })
    const result = await response.json()
    if (result.message) {
      alert(result.message)
    } else {
      setReports(result)
    }
  }
  useEffect(() => {
    // const timeOutId = setTimeout(() => run(), 500);
    // return () => clearTimeout(timeOutId);
  })
  useEffect(() => {
    if (Cookies.get("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  function transferRule(data) {
    setRule(data);
  }
  async function downloadYamlFile() {
    const yamlContent = rule;
    const blob = new Blob([yamlContent], { type: "application/yaml" });
    saveAs(blob, "rule.yml"); //name of the file instead of rule.yml
  }
  return (
    <div className="w-screen h-screen flex justify-start items-center flex-col font-sem2">
      <Navbar selected={"playground"} />
      <div className="w-full h-[calc(100%-4.35rem)] bg-secondary pt-[1rem] flex justify-center items-center">
        <ListRules transferRule={transferRule} />
        <RuleEditor content={rule} setContent={transferRule} />
        <div className="w-[40%] h-[calc(100%-1.25rem)] flex flex-col justify-start ml-[0.62rem] rounded-t[0.625rem] font-sem2">
          <div className="w[38.375rem] h-[3.75rem] justify-start items-cneter  rounded-t-[0.625rem] bg-primary">
            <div className=" text-white text-[1.5rem] flex mt-2 justify-end items-end ml-[0.88rem] mb-[0.75rem]">
              <div
                className="mr-5 cursor-pointer"
                onClick={() => {
                  nav("/new_rule", {
                    state: {
                      content: content,
                    },
                  });
                }}
              >
                Save
              </div>
              <div
                className="mr-5 cursor-pointer"
                onClick={() => {
                  downloadYamlFile();
                }}
              >
                Download
              </div>
            </div>
          </div>
          <div className="bg-white flex w-full h-[3.125rem] justify-center items-center text-[1.25rem] border-b-2 border-b-black">
            Code
          </div>
          <div className="flex flex-col justify-start items-end bg-white ">
            <div className="h-[20rem] w-full">
              <SourceEditor source={source} setSource={setSource} />
            </div>
            <div onClick={run} className="w-[8rem] h-[2.1875rem]  flex justify-center items-center text-white hover:cursor-pointer bg-[#1C7ED6] mr-3 rounded-[0.625rem] my-2 hover:bg-[#5ca4e2]">
              Run
            </div>
          </div>
          <div className="bg-white flex-row mt-[0.62rem] w-full h-[13rem] justify-center items-center">
            <div className="text-[1.25rem]  flex justify-center items-center border-b-2 border-b-black">
              Results
            </div>
            <div className="pt-3 pl-3">
              {
              reports.map((r) => (
                <div>
                  <div>Line: {r.line}</div>
                  <div>{r.message}</div>
                </div>))
            }</div>
          </div>
        </div>
      </div>
    </div>
  );
}
