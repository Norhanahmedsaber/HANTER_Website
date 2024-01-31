import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
const ComboBox = ({ options, rules, setRules }) => {
  function optionName(options) {
    let rules = []
    options.map((option) => rules.push(option.name))
    return rules
  }
  return (
    <Multiselect
      isObject={false}
      onKeyPressFn={function noRefCheck() { }}
      onRemove={function noRefCheck() { }}
      onSearch={function noRefCheck() { }}
      onSelect={setRules}
      options={optionName(options)}
    />
  );
};

export default ComboBox;
