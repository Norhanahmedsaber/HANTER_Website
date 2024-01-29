import React from "react";
import { CopyField } from '@eisberg-labs/mui-copy-field';

function Clipboard({ text1, text2 }) {
    return (
        <div className=" flex flex-col text-[1.1rem] font-bold mt-4">
            {text1}
            <CopyField
                value={text2}
                style={{ width: "40rem", height: "4rem", marginTop: "0.4rem" }} />
        </div>
    )
}
export default Clipboard