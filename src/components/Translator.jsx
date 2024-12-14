import React, { useState } from 'react';

function Translator() {
  const [fromLanguage, setFromLanguage] = useState('English');
  const [toLanguage, setToLanguage] = useState('French');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslation = async () => {
    const response = await fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${fromLanguage}|${toLanguage}`);
    const data = await response.json();
    setTranslatedText(data.responseData.translatedText);
  };

  return (
    <div className="translator">
      <div className="form-group">
        <label>From:</label>
        <select value={fromLanguage} onChange={(e) => setFromLanguage(e.target.value)}>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>German</option>
        </select>
      </div>

      <div className="form-group">
        <label>To:</label>
        <select value={toLanguage} onChange={(e) => setToLanguage(e.target.value)}>
          <option>English</option>
          <option>French</option>
          <option>Spanish</option>
          <option>German</option>
        </select>
      </div>

      <div className="form-group">
        <label>Enter text to translate:</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter text here..."
        />
      </div>

      <button onClick={handleTranslation}>Translate</button>

      <div className="form-group">
        <label>Translation:</label>
        <textarea value={translatedText} readOnly />
      </div>
    </div>
  );
}

export default Translator;
