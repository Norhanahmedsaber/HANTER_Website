//old version 
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
    <div className="h-screen w-screen flex justify-center items-center">
      <Sidebar selected={"rules"} />
      <div className="w-[calc(100%-12.5rem)] h-full font-sem2">
        <div className="w-full h-[4.375rem] border flex items-center pl-[1.69rem] text-[2.6875rem] bg-[#F8F9FA]">
          New Rule
        </div>
        <div className="w-full mt-10 flex justify-center items-center">
          <div className="relative w-[95%] flex flex-col">
            <div className="text-sm text-[#E10808] absolute  -top-6">
              {error}
            </div>
            <div className="flex w-full justify-between items-center p-2 h-[4rem] bg-secondary mb-2 rounded-t-[0.675rem]">
              <div className="flex">
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
              <div className="flex flex-col justify-center items-center">
                <img
                  src="../../../privacy.png"
                  className="w-[1.5rem] h-[1.5rem] mr-[1rem]"
                ></img>
                <Switch
                  onChange={handlePrivacy}
                  checked={privacy}
                  className="mr-[1rem] mt-[0.1rem]"
                  size={"12rem"}
                />
              </div>
            </div>
            <div className="border border-t-0">
              <CodeViewer
                language={"yaml"}
                value={content}
                setContent={onChange}
              />
            </div>
            <div className="flex justify-end mt-5">
              <label
                htmlFor="Res-Text"
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
                  src="../../../Save.png"
                  className="w-[1.2rem] h-[1.2rem]"
                  alt=""
                />
              </label>
              <label
                htmlFor="Res-Text"
                className="w-[3rem] h-[3rem] bg-[#8F8C8C] rounded-full flex justify-center items-center cursor-pointer "
                onClick={() => {
                  downloadYamlFile();
                }}
              >
                <img
                  src="../../../downloads.png"
                  className="w-[1.2rem] h-[1.2rem]"
                  alt=""
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
