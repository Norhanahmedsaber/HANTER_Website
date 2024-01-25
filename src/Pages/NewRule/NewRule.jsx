import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import CodeViewer from "../Playground/CodeViewer";
import Cookies from "js-cookie";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import Switch from "react-switch";
import config from "../../../config";
export default function NewRule() {
  const [error, setError] = useState("");
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
    console.log(content);
    fetch(config.BASE_URL + "/rule", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Authorization: Cookies.get("token"),
      },
      body: JSON.stringify({
        name: ruleName,
        content: content,
        privacy: privacy,
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
  const onChange = (e) => {
    setContent(e);
  };
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Sidebar selected={"rules"} />
      <div className="w-[calc(100%-17.125rem)] h-full font-sem2">
        <div className="w-full h-[6.5rem] border flex items-center pl-[1.69rem] text-[2.6875rem] bg-[#F8F9FA]">
          New Rule
        </div>
        <div className="w-full h-[calc(100%-6.5rem)] flex justify-center items-center">
          <div className="relative w-[95%] h-[75%] flex flex-col border  ">
            <div className="text-sm text-[#E10808] absolute  -top-6">
              {error}
            </div>
            <div className="flex w-full justify-between items-center p-2 h-[5.75rem] bg-secondary mb-2 rounded-t-[0.675rem]">
              <div className="flex">
                <div className="text-[1.5625rem] font-Jomolhari text-[#FFF] ml-[1rem]">
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
                  src="../../../public/privacy.png"
                  className="w-[2.5rem] h-[2.5rem] mr-[1rem]"
                ></img>
                <Switch
                  onChange={setPrivacy}
                  checked={privacy}
                  className="mr-[1rem] mt-[0.1rem]"
                />
              </div>
            </div>
            <CodeViewer
              language={"yaml"}
              content={content}
              setContent={onChange}
            />
            <div className="flex justify-end">
              <div
                className="relative  bg-white rounded-r-[1.25rem] pl-4 text-[1.875rem] flex justify-center items-center"
                onClick={() => {
                  if (ruleName) {
                    createRuleHandler();
                    setError("");
                  } else {
                    setError("Failed to save!");
                  }
                }}
              >
                <label
                  htmlFor="Res-Text"
                  className="w-[4.25rem] h-[4.25rem] mr-[4rem] bg-[#8F8C8C] rounded-full absolute right-[0.31rem] top-[0.31rem] flex justify-center items-center cursor-pointer"
                >
                  <img
                    src="../../../public/Save.png"
                    className="w-[1.9rem] h-[1.9rem]"
                    alt=""
                  />
                </label>
              </div>
              <div className="relative  bg-white rounded-r-[1.25rem] pl-4 text-[1.875rem] flex justify-center items-center">
                <label
                  htmlFor="Res-Text"
                  className="w-[4.25rem] h-[4.25rem] bg-[#8F8C8C] rounded-full absolute right-[0.31rem] top-[0.31rem] flex justify-center items-center cursor-pointer"
                >
                  <img
                    src="../../../public/downloads.png"
                    className="w-[1.9rem] h-[1.9rem]"
                    alt=""
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
