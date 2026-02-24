import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import './App.css';

function App() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lipi-Check AI</h1>
        {!image ? (
          <div className="camera-box">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: "environment" }}
            />
            <div className="guide-box"></div>
            <button className="btn-capture" onClick={capture}>Capture Circuit</button>
          </div>
        ) : (
          <div className="preview-box">
            <img src={image} alt="Captured" />
            <div className="btn-row">
              <button className="btn-retake" onClick={() => setImage(null)}>Retake</button>
              <button className="btn-analyze">Analyze Errors</button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;