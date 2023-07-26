import results from "../components/resultObject.json";

const Result = () => {
  const type = results[tripType];

  if (!nation) {
    return <div>존재하지 않는 결과입니다.</div>;
  }

  return (
    <div className="question-container">
      <div>
        <div className="question-text">{results.nick}</div>
      </div>
    </div>
  );
};
