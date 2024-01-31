import React, { useState } from "react";
import ComboBox from "./ComboBox";
import Checkbox from "@mui/material/Checkbox";
import config from "../../../config";

export default function ProjectBar({ projectRules, projectName }) {
  const [rules, setRules] = useState([]);
  const [highSeverityCheck, setHighSeverityCheck] = useState(false);
  const [meduiemSeverityCheck, setMeduimSeverityCheck] = useState(false);
  const [lowSeverityCheck, setLowSeverityCheck] = useState(false);

  return (
    <div></div>
  );
}
