function JobDescription({ jobDescription, setJobDescription }) {
  return (
    <div>
      <label>Job Description</label>
      <br />

      <textarea
        rows="10"
        cols="60"
        placeholder="Paste the job description here..."
        value={jobDescription}
        onChange={(event) => setJobDescription(event.target.value)}
      />

      <p>Characters: {jobDescription.length}</p>
    </div>
  );
}

export default JobDescription;