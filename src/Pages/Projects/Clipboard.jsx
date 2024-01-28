import React from "react";
import {CopyField} from '@eisberg-labs/mui-copy-field';
 
function Clipboard({text1,text2}) {
    return(
        <div className=" flex flex-col pl-[1rem] text-[1.5625rem]"> {text1}
        <CopyField
        value={text2}
        style={{width:"40rem" , height:"4rem"}}/>
        </div>
    )
}
export default Clipboard