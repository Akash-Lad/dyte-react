import React, { useState } from 'react';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Launch, TransitEnterexit } from "@material-ui/icons";

const Editor = ({ language, title, value, onChange }) => {
    const [open, setOpen] = useState(true);  // setting the language as prop
    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`} > {/*adding dynamic className to adding string variable*/}
            <div className="editor-title">
                {title}
                <button onClick={() => setOpen((prevOpen) => !prevOpen)} className="expand-collapse-button"> {/*expand tabs to resize*/}
                    {open ? <TransitEnterexit /> : <Launch />}
                </button>
            </div>
            <ControlledEditor
                className="code-mirror-wrapper"
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true, // used for wrapping the lines in code editor
                    lint: true, //used for syntax-highlighting purpose
                    mode: language,
                    theme: "material", //used for setting dark theme for code editor
                    lineNumbers: true,
                }} />
        </div >
    )
}

export default Editor
