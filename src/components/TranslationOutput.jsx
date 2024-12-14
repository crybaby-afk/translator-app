import './TranslationOutput.css';

const TranslationOutput = ({ translatedText }) => {
  return (
    <div className="output-section">
      <textarea
        className="text-output"
        const value={translatedText || ''} 
        readOnly
        placeholder="Translation appears here..."
      />
    </div>
  );
};

export default TranslationOutput;


