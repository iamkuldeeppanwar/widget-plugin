// import React, { useState } from "react";

// const Widget = () => {
//   const [html, setHtml] = useState("");
//   const [css, setCss] = useState("");
//   const [js, setJs] = useState("");
//   const [generatedScript, setGeneratedScript] = useState("");

//   const generateScript = () => {
//     const script = `
//       (function () {
//         // Inject CSS
//         const style = document.createElement("style");
//         style.innerHTML = \`${css}\`;
//         document.head.appendChild(style);

//         // Inject HTML
//         const container = document.createElement("div");
//         container.id = "user-widget";
//         container.innerHTML = \`${html}\`;
//         document.body.appendChild(container);

//         // Execute JavaScript
//         (function () {
//           ${js}
//         })();
//       })();
//     `;
//     setGeneratedScript(script);
//   };

//   const downloadScript = () => {
//     const blob = new Blob([generatedScript], {
//       type: "application/javascript",
//     });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "user-widget.js";
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <h1>Widget Script Generator</h1>
//       <textarea
//         placeholder="Enter HTML"
//         value={html}
//         onChange={(e) => setHtml(e.target.value)}
//       />
//       <textarea
//         placeholder="Enter CSS"
//         value={css}
//         onChange={(e) => setCss(e.target.value)}
//       />
//       <textarea
//         placeholder="Enter JavaScript"
//         value={js}
//         onChange={(e) => setJs(e.target.value)}
//       />
//       <button onClick={generateScript}>Generate Script</button>
//       {generatedScript && (
//         <>
//           <h2>Generated Script:</h2>
//           <textarea readOnly value={generatedScript} />
//           <button onClick={downloadScript}>Download Script</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Widget;

// import React, { useState } from "react";

// const Widget = () => {
//   const [html, setHtml] = useState("");
//   const [css, setCss] = useState("");
//   const [js, setJs] = useState("");
//   const [generatedScript, setGeneratedScript] = useState("");

//   const generateScript = () => {
//     const script = `
//       (function () {
//         // Inject CSS
//         const style = document.createElement("style");
//         style.innerHTML = \`${css}\`;
//         document.head.appendChild(style);

//         // Inject HTML
//         const container = document.createElement("div");
//         container.id = "user-widget";
//         container.innerHTML = \`${html}\`;
//         document.body.appendChild(container);

//         // Execute JavaScript
//         (function () {
//           ${js}
//         })();
//       })();
//     `;
//     setGeneratedScript(script);
//   };

//   const downloadScript = () => {
//     const blob = new Blob([generatedScript], {
//       type: "application/javascript",
//     });
//     const url = URL.createObjectURL(blob);
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "user-widget.js";
//     link.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div>
//       <h1>Widget Script Generator</h1>
//       <textarea
//         placeholder="Enter HTML"
//         value={html}
//         onChange={(e) => setHtml(e.target.value)}
//       />
//       <textarea
//         placeholder="Enter CSS"
//         value={css}
//         onChange={(e) => setCss(e.target.value)}
//       />
//       <textarea
//         placeholder="Enter JavaScript"
//         value={js}
//         onChange={(e) => setJs(e.target.value)}
//       />
//       <button onClick={generateScript}>Generate Script</button>
//       {generatedScript && (
//         <>
//           <h2>Generated Script:</h2>
//           <textarea readOnly value={generatedScript} />
//           <button onClick={downloadScript}>Download Script</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Widget;

// Widget.js
import React, { useState } from "react";

const Widget = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [generatedScript, setGeneratedScript] = useState("");

  const generateScript = () => {
    const script = `
      (function () {
        // Inject CSS
        const style = document.createElement("style");
        style.innerHTML = \`${css}\`;
        document.head.appendChild(style);

        // Inject HTML
        const container = document.createElement("div");
        container.id = "user-widget";
        container.innerHTML = \`${html}\`;
        document.body.appendChild(container);

        // Execute JavaScript
        (function () {
          ${js}
        })();
      })();
    `;
    setGeneratedScript(script);
  };

  const downloadScript = () => {
    const blob = new Blob([generatedScript], {
      type: "application/javascript",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "user-widget.js";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <h1>Widget Script Generator</h1>
      <textarea
        placeholder="Enter HTML"
        value={html}
        onChange={(e) => setHtml(e.target.value)}
        style={{ width: "100%", height: "80px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Enter CSS"
        value={css}
        onChange={(e) => setCss(e.target.value)}
        style={{ width: "100%", height: "80px", marginBottom: "10px" }}
      />
      <textarea
        placeholder="Enter JavaScript"
        value={js}
        onChange={(e) => setJs(e.target.value)}
        style={{ width: "100%", height: "80px", marginBottom: "10px" }}
      />
      <button
        onClick={generateScript}
        style={{ padding: "10px 15px", marginRight: "10px" }}
      >
        Generate Script
      </button>
      {generatedScript && (
        <>
          <h2>Generated Script:</h2>
          <textarea
            readOnly
            value={generatedScript}
            style={{ width: "100%", height: "150px", marginBottom: "10px" }}
          />
          <button onClick={downloadScript} style={{ padding: "10px 15px" }}>
            Download Script
          </button>
        </>
      )}
    </div>
  );
};

export default Widget;
