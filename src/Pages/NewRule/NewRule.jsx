import React, { useState, useEffect } from "react";
import CodeViewer from "../Playground/CodeViewer";
import Cookies from "js-cookie";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import config from "../../../config";
export default function NewRule(props) {
  const { ruleData } = props;
  const [error, setError] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [Public, setPublic] = useState(0);
  const state = useLocation();
  const [content, setContent] = useState("");
  const [ruleName, setRuleName] = useState("");
  const nav = useNavigate();
  const receivedData = state.state;
  useEffect(() => {
    setContent(state.content);
    if (Cookies.get("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  async function downloadYamlFile() {
    const yamlContent = content;
    const blob = new Blob([yamlContent], { type: "application/yaml" });
    saveAs(blob, "rule.yml"); //name of the file instead of rule.yml
  }
  function createRuleHandler() {
    console.log(content);
    console.log(privacy)
    fetch(config.BASE_URL + "/rule", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: Cookies.get("token"),
      },
      body: JSON.stringify({
        name: ruleName,
        content: content,
        public: Public
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          setError(result.message);
        } else {
          nav("/rule/" + result.id);
          console.log("Done");
        }
      });
  }
  const onChange = (e) => {
    setContent(e);
  };

  function handlePrivacy(e)
  { 
    setPrivacy(e)
    if(privacy)
    {
      setPublic(0)
      console.log(Public)
      }
      else{
        setPublic(1)
      console.log(Public)
        
      }
  }
  return (
    <div className="h-screen w-screen flex justify-start items-center">
      <Sidebar selected={"rules"} />
      <div className="w-[calc(100%-12.5rem)] h-full flex flex-col font-sem2 border items-center ">
        <div className="w-full h-[3.6rem] border  flex  justify-start items-center  bg-[#F8F9FA]">
          <div className="font-sem2 text-[2.6875rem] ml-[1.5rem]">New Rule</div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center border border-red-500">
          <div className="relative w-[99%] flex flex-col">
            <div className="text-sm text-[#E10808] absolute  -top-6">
              {error}
            </div>
          </div>
          <div className="w-[90%] h-[52.375rem] border rounded-[0.675rem] border-black">
            <div className="flex w-full justify-between items-center p-2 h-[4rem] bg-secondary mb-2 rounded-t-[0.675rem]">
                <div className=" w-[40%] h-full flex items-center justify-start">
                    <div className="text-[1.5625rem] font-sem2 text-[#fff] ml-[1rem]">
                    Rule Name:
                    </div>
                    <input
                    className="ml-2 border border-slate-400 p-2 text-sm w-[19.3125rem] h-[2.3125rem] rounded-[0.625rem] bg-[#FFF]"
                    onChange={(e) => {
                      setRuleName(e.currentTarget.value);
                    }}
                  />
                </div>
                <div className="flex flex-col justify-center items-center w-[7%]">
                  <img
                    src="../../../public/privacy.png"
                    className="w-[1.5rem] h-[1.5rem] mr-[1rem]"
                  ></img>
                  <Switch
                    onChange={handlePrivacy}
                    checked={privacy}
                  />
              </div>
            </div>
            <div className="w-[100%] h-[80%] "> 
              <CodeViewer
                language={"yaml"}
                value={content}
                setContent={onChange}
                height="300px"
              />    
            </div>
            <div className="w-[100%] h-[3rem]  flex justify-end items-center pr-2">
              <label
                  className="w-[3rem] h-[3rem] mr-[1rem] bg-[#8F8C8C] rounded-full flex justify-center items-center cursor-pointer"
                  onClick={() => {
                    if (ruleName) {
                      createRuleHandler();
                      setError("");
                      console.log(ruleData);
                    } else {
                      setError("Failed to save!");
                    }
                  }}
                >
                  <img
                    src="../../../public/Save.png"
                    className="w-[1.2rem] h-[1.2rem]"
                  />
              </label> 
              <label
                  className="w-[3rem] h-[3rem] bg-[#8F8C8C] rounded-full flex justify-center items-center cursor-pointer "
                  onClick={() => {
                    downloadYamlFile();
                  }}
                 >
                  <img
                    src="../../../public/downloads.png"
                    className="w-[1.2rem] h-[1.2rem]"
                    alt=""
                  />
              </label>     
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
