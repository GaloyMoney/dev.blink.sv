import React, { useState, useEffect } from 'react';
import { phoneLogin } from './authUtilities';
import { useAuth } from './AuthContext';
import { generateCurlCommandPhoneLogin } from './curlCommandGenerators';

function LoginPhone() {
  const { authToken, setAuthToken } = useAuth();
  const [apiEndpoint, setApiEndpoint] = useState('https://api.blink.sv/graphql');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [showToken, setShowToken] = useState(false);
  const [response, setResponse] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [curlCommand, setCurlCommand] = useState('');

  const handleLogin = async () => {
    setErrorMessage(null);
    setResponse(null);
    if (phone.length < 10 || code.length < 6) {
      setErrorMessage("Invalid input");
      return;
    }

    try {
      const tokenFromLogin = await phoneLogin(apiEndpoint, phone, code);
      setAuthToken(tokenFromLogin);
      setResponse("Got the auth token!");
      setCurlCommand(generateCurlCommandPhoneLogin(apiEndpoint, phone, code));
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  useEffect(() => {
    setCurlCommand(generateCurlCommandPhoneLogin(apiEndpoint, phone, code));
  }, [phone, code, apiEndpoint]);

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  }

  const handleApiEndpointChange = (e) => {
    setApiEndpoint(e.target.value);
  }

  const toggleShowToken = () => {
    setShowToken(prevState => !prevState);
  }

  return (
    <div>
      <div>
        <h2>Log in with phone and code</h2>
        <div>The GraphQL endpoint to connect to:</div>
        <select
          type="text"
          value={apiEndpoint}
          onChange={handleApiEndpointChange}
          style={{ width: '50%', marginBottom: '10px' }}
        >
          <option value="https://api.blink.sv/graphql">Blink (mainnet) - https://api.blink.sv/graphql</option>
          <option value="https://api.staging.blink.sv/graphql">Staging (signet) - https://api.staging.blink.sv/graphql</option>
        </select>

        <div></div>
        <input type="text" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
        <div></div>
        <input type="text" placeholder="Code" value={code} onChange={handleCodeChange} />
        <div></div>
        <button onClick={handleLogin}>Log in</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>curl command for phone login</h3>
        <pre style={{
          backgroundColor: 'auto',
          padding: '10px',
          marginLeft: '10px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap'
        }}>
          {curlCommand}
        </pre>
      </div>

      {response && <div style={{ color: 'green' }}>{response}</div>}
      {errorMessage && <div style={{ color: 'red' }}>Error: {errorMessage}</div>}

      {authToken && (
        <div>
          <button onClick={toggleShowToken}>Toggle Token Visibility</button>
          {showToken && <div><strong>Token:</strong> {authToken}</div>}
        </div>
      )}
    </div>
  );
}

export default LoginPhone;
