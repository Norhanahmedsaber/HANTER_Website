import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./style.css";
import Button from "./Button";
import config from "../../../config";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import YamlViewer from "./YamlViewer";

export default function ViewRule() {
  const [name, setName] = useState("");
  const [uuid, setUuid] = useState("");
  const [content, setContent] = useState("");
  const params = useParams();
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
  return (
    <div className="w-scree h-screen flex flex-col">
      <Navbar />
      <div className="w-full h-[90%] flex flex-col justify-center items-center">
        <div className="w-[40%] h-[80%] border-2 rounded-lg p-2">
          <div className="w-full h-[30%] flex flex-row">
            <div className="w-[40%] h-full flex justify-center items-center text-xl font-bold">
              {name}
            </div>
            <div className="w-[60%] h-full flex justify-end items-center">
              <Button name={"delete"} action={deleteAction} />
            </div>
          </div>
          <div className="w-full h-[70%] flex flex-row">
            <YamlViewer content={content} setContent={setContent} />
          </div>
          <div className="w-full flex justify-end">
            <div className="w-20 h-14 flex justify-center items-center cursor-pointer rounded bg-teal-400 border  text-center">
              Done
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
