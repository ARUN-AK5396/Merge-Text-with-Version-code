// App.js

import React, { useState } from 'react';
import VersionedFile from './VersionedFile';

function App() {
  const [file, setFile] = useState(new VersionedFile("Base content"));

  const handleAddDelta = () => {
    const deltaContent = prompt("Enter delta content:");
    if (deltaContent) {
      file.addDelta(deltaContent);
      setFile(new VersionedFile(file.generateVersion(file.deltas.length + 1))); // Update the file with the latest content
    }
  };

  const handleGenerateVersion = () => {
    const versionNumber = parseInt(prompt("Enter version number:"), 10);
    if (versionNumber) {
      const generatedVersion = file.generateVersion(versionNumber);
      alert(`Generated Version ${versionNumber} Content: ${generatedVersion}`);
    }
  };

  return (
    <div>
      <h1>Versioned File Example</h1>
      <button onClick={handleAddDelta}>Add Delta</button>
      <button onClick={handleGenerateVersion}>Generate Version</button>
    </div>
  );
}

export default App;
