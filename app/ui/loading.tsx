import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <span className="loading loading-ring loading-lg text-info"></span>
    </div>
  )
};

export default Loading;
