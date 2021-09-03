import React from 'react';
import { MathComponent } from 'mathjax-react';

const MathjaxForm = () => {
  return <MathComponent tex={String.raw`\int_0^1 x^2\ dx`} />;
};

export default MathjaxForm;
