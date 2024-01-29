import React, { useEffect, useState } from "react";
import Components from "./Components";
import config from "../../../config";
import Cookies from "js-cookie";
import DropDownButton from "../DropDownButton";
import {useNavigate} from 'react-router-dom'
export const Sidebar = ({ selected }) => {
  const [user, setUser] = useState("");
  const nav = useNavigate()
  function signOut () {
    Cookies.remove('token')
    nav('../login')
  }
  function userHandler() {
    fetch(config.BASE_URL + "/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          nav('../login')
        } else {
          setUser(result);
        }
      });
  }
  useEffect(() => {
    userHandler();
  }, []);
  return (
    <div className="h-full w-[12.5rem] flex flex-col justify-start items-start bg-primary">
      <div className="w-full h-[4.375rem] flex justify-center items-center border-b">
        <img
          src="../../../public/menu.png"
          className=" w-[0.93rem] h-[0.93rem] mt-1 mr-2 cursor-pointer"
        />
        <div className="text-[#FFF] text-[.925rem] font-sem2 w-[8rem] truncate ml-[0.3rem]">
          {user.email}
        </div>
        <DropDownButton
          options={[{ innerText: 'Sign Out', action: () => { signOut(true) } }]}
        >
          <img
            src="../../../public/down-arrow.png"
            className="w-[0.937S5rem] h-[0.9375rem] cursor-pointer"
          />
        </DropDownButton>
      </div>
      <div className="flex w-full h-full flex-col items-between justify-between mb-[1.13rem]">
        <div className="mt-[0.9rem]">
          {selected == "dashboard" ? (
            <Components
              path={"/dashboard"}
              iconPath={"../../../public/dashboard.png"}
              text={"Dashboard"}
              selected={true}
            />
          ) : (
            <Components
              path={"/dashboard"}
              iconPath={"../../../public/dashboard.png"}
              text={"Dashboard"}
            />
          )}
          {selected == "projects" ? (
            <Components
              path={"/projects"}
              iconPath={"../../../public/projects.png"}
              text={"Projects"}
              selected={true}
            />
          ) : (
            <Components
              path={"/projects"}
              iconPath={"../../../public/projects.png"}
              text={"Projects"}
            />
          )}
          {selected == "rules" ? (
            <Components
              path={"/rules"}
              iconPath={"../../../public/Rules.png"}
              text={"Rules"}
              selected={true}
            />
          ) : (
            <Components
              path={"/rules"}
              iconPath={"../../../public/Rules.png"}
              text={"Rules"}
            />
          )}
        </div>
        <div>
          <Components
            path={"../playground"}
            iconPath={"../../../public/playground.png"}
            text={"Playground"}
          />
          <Components
            path={"../help"}
            iconPath={"../../../public/help.png"}
            text={"Help"}
          />
          <Components
            path={"../docs"}
            iconPath={"../../../public/docs.png"}
            text={"Docs"}
          />
        </div>
      </div>
      <div className="w-full h-[6.5rem] border-t flex justify-center items-center">
        <img
          src={"../../../../public/logo-white.png"}
          className="w-[2.8125rem] h-[2.8125rem] "
        />
        <div className="text-[1.5625rem] text-white font-Jomolhari ml-[0.7rem]">
          HANTER
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
