import React from 'react';
import ReactDom from 'react-dom';

const rootElement = document.getElementById('root')
// const element = document.createElement('div')
// element.textContent = 'hello world'
// element.className = 'container'
// rootElement.appendChild(element)

const element = React.createElement(
  'div',
  {className: 'container'},
  children: 'hello world'
)
ReactDom.render(element, rootElement)
