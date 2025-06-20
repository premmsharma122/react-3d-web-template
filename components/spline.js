// src/SplineScene.js
import React from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineScene() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', zIndex: 0 }}>
  <Spline scene="https://prod.spline.design/5QTjf91x80yBvb-1/scene.splinecode" />
</div>

  );
}
