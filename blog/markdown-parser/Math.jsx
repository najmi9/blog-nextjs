import React from 'react';
import Tex from '@matejmazur/react-katex'

const Math = ({value}) => {

  return <Tex block math={value} errorColor={'#cc0000'} renderError={(error) => {
      return <b>Fail: {error.name}</b>;
    }} as="figcaption" settings={{ macros: { '*': '\\cdot' } }}/>;
}

const InlineMath = ({value}) => <Tex math={value} errorColor={'#cc0000'} renderError={(error) => {
      return <b>Fail: {error.name}</b>;
    }} as="figcaption" settings={{ macros: { '*': '\\cdot' } }}/>;

export {
    Math,
    InlineMath,
};