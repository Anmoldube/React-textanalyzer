import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import backgroundVideo from '../videob.mp4'; // Provide the correct path to your video file

export default function TextForm() {
  const [text, setText] = useState('');
  const { transcript, resetTranscript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();

  const handleStartListening = () => {
    if (browserSupportsSpeechRecognition) {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  const handleStopListening = () => {
    if (browserSupportsSpeechRecognition) {
      SpeechRecognition.stopListening();
      setText(transcript);
    }
  };

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleToLowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
  };

  const handleClearText = () => {
    setText('');
    resetTranscript();
  };

  const handleExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText.trim());
  };

  const handleTextToSpeech = () => {
    const speechUtterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speechUtterance);
  };

  const handleSpeechRecognition = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="my-2">
        <h1>
        <div className="cover home">
  <center className="text-white">
    Enter The Text To Analyze <p className="text-dark bg-success-subtle my-1 mt-2 card">Home</p>
  </center>
</div>

        </h1>
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="text-wrap my-1 ">
          <textarea
            className="form-control center my-1 mx-1 text-bg-dark"
            id="mybox"
            value={text}
            onChange={handleSpeechRecognition}
            rows={10}
          />
          <button className="btn btn bg-primary mx-1 my-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn bg-primary mx-1 my-2" onClick={handleToLowercase}>
            Convert to lowercase
          </button>
          <button className="btn btn bg-primary mx-1 my-2" onClick={handleCopyText}>
            Copy Text
          </button>
          <button className="btn btn bg-primary mx-1 my-2" onClick={handleClearText}>
            Clear text
          </button>
          <button className="btn1 btn bg-primary mx-1 my-2" onClick={handleExtraSpaces}>
            Remove extra spaces
          </button>
          <button className="btn1 btn bg-primary mx-1 my-2" onClick={handleTextToSpeech}>
            Listen
          </button>
          <button className="btn1 btn bg-primary mx-1 my-2" onClick={handleStartListening}>
            Start speaking
          </button>
          <button className="btn1 btn bg-primary mx-1 my-2" onClick={handleStopListening}>
            Stop speaking
          </button>
          <div>{listening ? 'Listening...' : 'Not Listening'}</div>
          {listening && (
            <div className="speech-recognition-output">
              <p>Listening...</p>
              <p>{transcript}</p>
            </div>
          )}
        </div>
      </div>
      <div className="container my-2"></div>
      <h3>
        <center className="text-light">Your Text Summary Is</center>
      </h3>
      <p>
        <center className="text-light mt-3">
          {text.split(' ').length - 1} Words and {text.length} Characters
        </center>
      </p>
      <p>
        <center className="text-light">
          <i>It may take approximately {0.008 * (text.split(' ').length - 1)} minutes to read.</i>
        </center>
        <div>
      <center> <a href="https://translate.google.co.in/">To change the input language</a></center></div>
      </p>
    </>
  );
}
