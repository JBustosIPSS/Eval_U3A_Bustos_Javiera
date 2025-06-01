import React from 'react';

interface SpinnerProps {
  loading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ loading }) => {
  return (
    <div style={{ display: loading ? 'block' : 'none' }} className="spinner-container">
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
