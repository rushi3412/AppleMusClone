import React from 'react';

const SongProgressBar = ({ progress }) => {
  const barStyles = {
    height: '4px',
    width: '100%',
    backgroundColor: '#ccc',
    borderRadius: '2px',
  };

  const progressStyles = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: '#1DB954',
    borderRadius: '2px',
  };

  return (
    <div style={barStyles}>
      <div style={progressStyles}></div>
    </div>
  );
};

export default SongProgressBar;