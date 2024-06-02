import React from 'react';
import './button.css';

const DownloadButton = ({ title, submit }) => {
  return (
    <button className="buttonDownload" onClick={submit}>
      {title}
    </button>
  );
};

export default DownloadButton;
