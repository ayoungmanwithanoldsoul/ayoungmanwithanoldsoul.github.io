import React from 'react';

const Fatal = () => {
  throw new Error('Fatal error in React component');
  return <div>Some content</div>;
};

export default Fatal;