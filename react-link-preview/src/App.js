import React, { useState } from 'react';

import LinkPreview from './components/LinkPreview.js';

import getUrl from './utils/getUrl.js';
import fetchUrl from './utils/fetchUrl.js';
import parseHTML from './utils/parseHTML.js';
import getPreviewData from './utils/getPreviewData.js';

import './App.css';

function App() {

  const [previewData, setPreviewData] = useState(null);

  const onBlur = event => {

    const url = getUrl(event.target.value);
    
    if (!url) return null;
    
    fetchUrl(url)
      .then(parseHTML)
      .then(getPreviewData)
      .then(setPreviewData)
      .then(console.log)
      .catch(console.error);

  };

  return (
    <>
      <div className="container">
        <h1 className="row">React Link Preview</h1>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            onBlur={onBlur}
          />
          <ul>
            <li>https://github.com/axios/axios</li>
            <li>http://globoesporte.globo.com</li>
          </ul>
        </div>
      </div>
      {previewData &&
        <LinkPreview data={previewData} />
      }
    </>
  );
}

export default App;
