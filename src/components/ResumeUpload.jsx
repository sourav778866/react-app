function ResumeUpload({ resume, setResume }) {
  return (
    <div>
      <label>Upload Resume</label>
      <br />

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(event) => setResume(event.target.files[0])}
      />

      <p>
        Selected Resume: {resume ? resume.name : "No file selected"}
      </p>
    </div>
  );
}

export default ResumeUpload;