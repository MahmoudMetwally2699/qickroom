import React, { useState } from 'react';

const ApiTest = () => {
  const [result, setResult] = useState('');

  const testApi = async () => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ test: 'ping' })
      });
      const data = await response.json();
      setResult(JSON.stringify(data));
    } catch (err) {
      setResult('Error: ' + err.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>API Connection Test</h2>
      <button onClick={testApi}>Test /api/submit</button>
      <div style={{ marginTop: 20 }}>
        <strong>Result:</strong>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default ApiTest;
