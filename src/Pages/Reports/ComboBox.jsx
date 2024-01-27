import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
const ComboBox = ({ options, rules, setRules }) => {
  return (
    <Multiselect
      isObject={false}
      onKeyPressFn={function noRefCheck() {}}
      onRemove={function noRefCheck() {}}
      onSearch={function noRefCheck() {}}
      onSelect={setRules}
      options={options}
    />
  );
};

export default ComboBox;
