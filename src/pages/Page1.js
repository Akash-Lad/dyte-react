// import React, { useEffect, useState } from 'react';
// import Editor from './components/Editor';

// const Page1 = () => {

//     // use built-in hook to add state to functional component to incorporate code in editor 
//     const [html, setHtml] = useState("");
//     const [css, setCss] = useState("");
//     const [js, setJs] = useState("");
//     const [srcDoc, setSrcDoc] = useState('');


// useEffect(() => {
//     const timeout = setTimeout(() => {
//         setSrcDoc(`
//       <html>
//       <body>${html}</body>
//       </html>`);
//     }, 250);
//     return () => {
//         clearTimeout(timeout);
//     };
// }, [html]);

// return (
//     <>
//         <div className="top-panel">
//             <Editor
//                 language="xml"
//                 title="HTML"
//                 value={html}
//                 onChange={setHtml}
//             />

//         </div>
//     </>
// )
// }

// export default Page1;
