import React, { useEffect, useState } from "react";
import Editor from "./components/Editor";

const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");
  const [state, setState] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
       <html>
       <body>${html}</body>
       <style>${css}</style>
       <script>${js}</script>
       </html>`);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);
  return (
    <>
      <h1>Code Editor for HTML, CSS & JavaScript</h1>

      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              File Explorer
            </li>
            <li>
              <div className="btn1">
                <button className="btn1" onClick={() => setState(1)}>index.html</button>
              </div>
            </li>
            <li>
              <div className="btn1">
                <button onClick={() => setState(2)}>index.css</button>
              </div>
            </li>
            <li>
              <div className="btn1">
                <button onClick={() => setState(3)}>index.js</button>
              </div>
            </li>
          </ul>
        </header>
      </div>


      <div className="top-panel">

        {state === 0 &&
          <div className="container">
            <div className="row">
              <div className="col">
                <Editor
                  language="xml"
                  displayName="HTML"
                  value={html}
                  onChange={setHtml}
                />
              </div>
              <div className="col">
                <Editor
                  language="css"
                  displayName="CSS"
                  value={css}
                  onChange={setCss}
                />
              </div>
              <div className="col">
                <Editor
                  language="javascript"
                  displayName="JS"
                  value={js}
                  onChange={setJs}
                />
              </div>
            </div>
            <div className="clearfix">
            </div>
          </div>

        }
        {state === 1 &&
          <div>
            <Editor
              language="xml"
              displayName="Index.html"
              value={html}
              onChange={setHtml}
            />
          </div>
        }
        {state === 2 &&
          <div>
            <Editor
              language="css"
              displayName="Index.css"
              value={css}
              onChange={setCss}
            />
          </div>
        }
        {state === 3 &&
          <div>
            <Editor
              language="javascript"
              displayName="Index.js"
              value={js}
              onChange={setJs}
            />
          </div>
        }
      </div>
      <div className="pane">
        <h1>Live Output View:</h1>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameborder="1"
          width="70%"
          height="70%"
          margin="50px"
        />
      </div>
    </>
  );
};

export default App;


