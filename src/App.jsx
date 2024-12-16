import React, { useState } from 'react';
import './App.css';
import Dropdowns from './Dropdowns';
import TextInput from './TextInput';
import ActionButtons from './ActionButtons';
import OutputBox from './OutputBox';

const languages = {
  en: { name: 'English' },
  es: { name: 'Spanish' },
  fr: { name: 'French' },
  de: { name: 'German' },
};

function App() {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Simple translation logic for demonstration purposes
    // You can replace this with actual translation logic later
    setTranslatedText(`${text} (translated from ${sourceLanguage} to ${targetLanguage})`);
  };

  const handleClear = () => {
    setText('');
    setTranslatedText('');
  };

  return (
    <div className="App">
      <h1>Language Translator</h1>
      <Dropdowns
        languages={languages}
        selectedLanguage={sourceLanguage}
        setSelectedLanguage={setSourceLanguage}
        label="Select Source Language"
      />
      <Dropdowns
        languages={languages}
        selectedLanguage={targetLanguage}
        setSelectedLanguage={setTargetLanguage}
        label="Select Target Language"
      />
      <TextInput text={text} setText={setText} label="Enter Text to Translate" />
      
      <ActionButtons onTranslate={handleTranslate} onClear={handleClear} />

      <OutputBox translatedText={translatedText} />
    </div>
  );
}

export default App;
