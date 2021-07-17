// importing code-mirror libraries for incorporating languages in editor (html/css/js)
// importing react-codemirror2 to work with react alongwith codemirror
// importing materials UI icons for expand and collapse of editor

import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { Launch, TransitEnterexitSharp } from "@material-ui/icons";

const Editor = (props) => {
    const { language, displayName, value, onChange } = props;
    const [open, setOpen] = useState(true);

    function handler(editor, data, value) {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? "" : "collapsed"}`}>

            {/* Display editor title name with event-handling for expand and collapse of editor*/}

            <div className="editor-title">
                {displayName}
                <button
                    onClick={() => setOpen((prevOpen) => !prevOpen)}
                    className="expand-collapse-btn"
                >
                    {open ? <TransitEnterexitSharp /> : <Launch />}
                </button>
            </div>

            {/* Setting up editor with theme, language, line numbers and line wrapping*/}

            <ControlledEditor
                onBeforeChange={handler}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    theme: "material",
                    lineNumbers: true,
                }}
            />
        </div>
    );
};

export default Editor;


