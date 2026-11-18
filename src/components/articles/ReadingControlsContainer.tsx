'use client';

import React, { useState, useEffect } from 'react';
import ReadingControls from './ReadingControls';

interface ReadingControlsContainerProps {
  title: string;
}

export default function ReadingControlsContainer({ title }: ReadingControlsContainerProps) {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    // Dynamically adjust font size of article body
    const prose = document.querySelector('.prose');
    if (prose) {
      (prose as HTMLElement).style.fontSize = `${fontSize}px`;
    }
  }, [fontSize]);

  return <ReadingControls fontSize={fontSize} setFontSize={setFontSize} title={title} />;
}
