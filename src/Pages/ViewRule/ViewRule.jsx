import React, { useState, useEffect } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CodeViewer from "../Playground/CodeViewer";
import { useParams } from "react-router-dom";
import config from "../../../config";
import Cookies from "js-cookie";
export default function ViewRule() {
  const [name, setName] = useState("");
  const [uuid, setUuid] = useState("");
  const params = useParams();
  const [content, setContent] = useState("");
  function deleteAction() {
    fetch(config.BASE_URL + "/rules/" + uuid, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          //to doo
        } else {
          console.log(result.message);
        }
      });
  }
  function fetchRuleData() {
    fetch(config.BASE_URL + "/rules/" + params.id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          // to do
        } else {
          setName(result.name);
          setUuid(result.uuid);
          setContent(result.value);
        }
      });
  }
  useEffect(() => {
    fetchRuleData();
  }, []);
  function onChange(e) {
    setContent(e);
    console.log(e);
  }
  return (
    <div className="flex justify-start w-screen h-screen items-start">
      <Sidebar />
      <div className="w-[calc(100%-12.5rem)] h-full flex flex-col border ">
        <div className="  h-[3.5rem] border border-b-[#8F8C8C]">
          <diV className="font-sem2 ml-[1.25rem] text-[2.5rem]">{name}...</diV>
        </div>
        <div className="w-[38.25rem] h-[10.5rem] flex justify-center items-center ">
          <div className="font-sem2 pl-[1rem] text-[0.9375rem] overflow-hidden">
            The OWASP Top 10 is an industry-recognized report of top web
            application security risks. Use this ruleset to scan for OWASP Top
            10 vulnerabilities. The OWASP Top 10 is an industry-recognized
            report of top web application security risks. Use this ruleset to
            scan for OWASP Top 10 vulnerabilities.
          </div>
        </div>
        <div className="w-[38.25rem] h-[29.375rem]  ml-[1.31rem]">
          <div className="w-full h-[3.125rem] rounded-t-[0.625rem] bg-[#D9D9D9] flex justify-start items-center">
            <div className="font-sem2 text-[1.25rem] ml-[1.25rem]">Code</div>
          </div>
          <CodeViewer
            language={"yaml"}
            content={content}
            setContent={onChange}
          />
        </div>
      </div>
    </div>
  );
}
