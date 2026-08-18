import { useState } from "react";

import ResumeUpload from "./components/ResumeUpload";
import JobDescription from "./components/JobDescription";
const AI_URL = import.meta.env.VITE_AI_URL;
function App() {
  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyzeResume = async () => {

    if (!jobDescription.trim()) {
      setError("Please enter a job description.");
      return;
    }

    setLoading(true);
    setError("");
    setResult("");

    // const param = {
    //   prompt: jobDescription
    // };
   const param = {
  prompt: jobDescription
};

try {
  const response = await fetch(AI_URL+"/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(param)
  });

  const data = await response.text();

  console.log("Response:", data);

  if (!response.ok) {
    throw new Error(data || "Request failed");
  }

  setResult(data);

} catch (err) {
  console.error("API Error:", err);
  setError(err.message);

} finally {
  setLoading(false);
}
  };

  return (
    <div>
      <h1>HireFlow AI</h1>

      <h2>Resume Analyzer</h2>

      <ResumeUpload
        resume={resume}
        setResume={setResume}
      />

      <br />

      <JobDescription
        jobDescription={jobDescription}
        setJobDescription={setJobDescription}
      />

      <br />

      <button
        onClick={analyzeResume}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {error && (
        <p>{error}</p>
      )}

      {result && (
        <div>
          <h2>AI Response</h2>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;