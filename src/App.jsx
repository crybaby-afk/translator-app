import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('fr');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTranslate = () => {
    // Placeholder translation logic for now
    setTranslatedText(`Translated to ${targetLanguage}: ${inputText}`);
  };

  const handleClear = () => {
    setInputText('');
    setTranslatedText('');
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <TextInput value={inputText} onChange={handleInputChange} />
        <LanguageSelector
          value={sourceLanguage}
          onChange={(e) => setSourceLanguage(e.target.value)}
          label="Source Language"
        />
        <ActionButtons onTranslate={handleTranslate} onClear={handleClear} />
        <TranslationOutput translatedText={translatedText} />
        <LanguageSelector
          value={targetLanguage}
          onChange={(e) => setTargetLanguage(e.target.value)}
          label="Target Language"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
