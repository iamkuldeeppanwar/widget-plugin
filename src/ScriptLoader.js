import React, { useState } from "react";
import ReactDOM from "react-dom/client"; // Import ReactDOM for dynamic rendering
import Widget from "./Widget"; // Import the Widget component

const ScriptLoader = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [scriptUrl, setScriptUrl] = useState("");
  const [hasError, setHasError] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
    setScriptUrl("");
    setHasError(false);

    // Clear the UI when closing the popup
    const hostedContainer = document.getElementById("hosted-ui");
    if (hostedContainer) hostedContainer.innerHTML = "";
  };

  const loadScript = () => {
    if (!scriptUrl) {
      setHasError(true);
      return;
    }

    // Replace `%PUBLIC_URL%` with actual base URL if needed
    const baseUrl = process.env.PUBLIC_URL || "";
    const resolvedUrl = scriptUrl.replace("%PUBLIC_URL%", baseUrl);

    try {
      new URL(resolvedUrl, window.location.origin);
    } catch {
      setHasError(true);
      console.error("Invalid script URL.");
      return;
    }

    setHasError(false);

    // Render the Widget dynamically into the hosted UI container
    const hostedContainer = document.getElementById("hosted-ui");
    if (hostedContainer) {
      const widgetRoot = ReactDOM.createRoot(hostedContainer);
      widgetRoot.render(<Widget />);
    }
  };

  return (
    <div>
      {/* Floating Button */}
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "15px 20px",
          borderRadius: "50%",
          cursor: "pointer",
          fontSize: "18px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
        onClick={togglePopup}
      >
        +
      </button>

      {/* Popup */}
      {isPopupVisible && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "400px",
            maxHeight: "500px",
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 15px",
              fontSize: "18px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Load Hosted Script</span>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "16px",
                cursor: "pointer",
              }}
              onClick={togglePopup}
            >
              ✕
            </button>
          </div>
          <div
            style={{
              padding: "15px",
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <textarea
              style={{
                width: "100%",
                height: "60px",
                marginBottom: "10px",
                resize: "none",
                fontSize: "14px",
              }}
              placeholder="Paste hosted script URL here"
              value={scriptUrl}
              onChange={(e) => {
                setScriptUrl(e.target.value);
                setHasError(false);
              }}
            ></textarea>
            {hasError && (
              <div style={{ color: "red", marginBottom: "10px" }}>
                Invalid URL or failed to load script.
              </div>
            )}
            <button
              style={{
                backgroundColor: "#28a745",
                color: "white",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "5px",
                fontSize: "16px",
              }}
              onClick={loadScript}
            >
              Load Script
            </button>
            <div
              id="hosted-ui"
              style={{
                border: "1px solid #ccc",
                marginTop: "15px",
                height: "300px",
                overflow: "auto",
                backgroundColor: "#f9f9f9",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScriptLoader;
