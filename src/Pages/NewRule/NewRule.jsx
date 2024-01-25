import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CodeViewer from "../Playground/CodeViewer";
import Cookies from "js-cookie";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import Switch from "react-switch";
export default function NewRule() {
  const [isAuth, setIsAuth] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const state = useLocation();
  const [content, setContent] = useState("");
  const [ruleName, setRuleName] = useState("");
  const nav = useNavigate;
  useEffect(() => {
    setContent(state.content);
    if (Cookies.get("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, []);

  function createRuleHandler() {
    fetch(config.BASE_URL + "/rule", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: Cookies.get("token"),
      },
      body: JSON.stringify({
        name: ruleName,
        content: content.text,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          console.log("ERRRRRRRROR");
        } else {
          nav("/rule/" + result.id);
          console.log("Done");
        }
      });
  }
  function changeContent(cont) {
    setContent(cont.text);
  }

  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Sidebar selected={"rules"} />
      <div className="w-[calc(100%-17.125rem)] h-full font-sem2">
        <div className="w-full h-[6.5rem] border flex items-center pl-[1.69rem] text-[2.6875rem] bg-[#F8F9FA]">
          New Rule
        </div>
        <div className="w-full h-[calc(100%-6.5rem)] flex justify-center items-center">
          <div className="w-[95%] h-[80%] flex flex-col">
            <div className="flex w-full justify-between items-center p-2 h-[5.75rem] bg-secondary mb-2">
              <div className="flex">
                <div className="text-[1.5625rem] font-Jomolhari text-[#000] ml-[1rem]">
                  Rule Name:
                </div>
                <input
                  className="ml-1 border border-slate-400 text-center text-sm w-[19.3125rem] h-[2.3125rem] rounded-[0.625rem] bg-[#FFF]"
                  onChange={(e) => {
                    setRuleName(e.currentTarget.value);
                  }}
                />
              </div>
              <div className="flex flex-col ">
                <img
                  src="../../../public/privacy.png"
                  className="w-[2.5rem] h-[2.5rem] mr-[1rem]"
                ></img>
                <Switch onChange={setPrivacy} checked={privacy} />
              </div>
            </div>
            <CodeViewer
              language={"yaml"}
              text={content}
              onChange={setContent}
            />
            <div className="flex justify-end mb-[1.2rem] mr-[1rem] ">
              <div
                className=" bg-secondary flex justify-center w-[4.25rem] h-[4.25rem]  cursor-pointer mr-[1rem] rounded-full"
                onClick={() => {
                  createRuleHandler();
                }}
              ></div>
              <div className="bg-secondary flex justify-center w-[4.25rem] h-[4.25rem] rounded-full cursor-pointer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
