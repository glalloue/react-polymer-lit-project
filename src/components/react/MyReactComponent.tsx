// src/MyReactComponent.tsx
import React from 'react';
import '../polymer/polymer-cmp2.ts';

const MyReactComponent: React.FC = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <polymer-cmp2></polymer-cmp2>
    </div>
  );
};

export default MyReactComponent;
