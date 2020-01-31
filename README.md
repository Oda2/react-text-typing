# React text Typing

[![npm version](https://badge.fury.io/js/react-text-typing.svg)](https://www.npmjs.com/package/react-text-typing) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]

## Installation

```sh
$ npm add react-text-typing

//  OR

$ yarn add react-text-typing
```

## Demo
![Exemple](./docs/example.gif)

## Examples

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Text from 'react-text-typing';

const App = () => (
  <Text
    text="Example Text"
    showBlink={true}
    component="h1"
  />
);

ReactDOM.render(<App />, document.getElementById('root'));
```
