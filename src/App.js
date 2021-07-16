import React, { useEffect, useState } from 'react'
import Editor from './components/Editor';
import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import Page3 from './pages/Page3';

const App = () => {

  // use built-in hook to add state to functional component to incorporate code in editor 
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>
      ${html}
      </body>
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
      {/* <Router >
        <div className="App">
          <header className="App-Header">
            <ul>
              <li>
                <Link to="/index.html">HTML</Link>
              </li>
              <li>
                <Link to="/index.css">CSS</Link>
              </li>
              <li>
                <Link to="/index.js">JS</Link>
              </li>
            </ul>
            <div>
              <Switch>
                <Route exact path="/index.html" component={Page1} />
                <Route exact path="/index.css" component={Page2} />
                <Route exact path="/index.js" component={Page3} />
              </Switch>
            </div>
          </header>
        </div>
      </Router> */}
      <h1 className="header">Code Editor for HTML CSS & JavaScript</h1>
      <div className="top-panel">
        <Editor
          language="xml"
          title="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editor
          language="css"
          title="CSS"
          value={css}
          onChange={setCss}
        />
        <Editor
          language="javascript"
          title="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="bottom-panel">
        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%" />
      </div>
    </>
  )
}

export default App;
