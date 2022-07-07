# react-rerender-test

> A simple react component to test the component re-render

[![NPM](https://img.shields.io/npm/v/react-rerender-test.svg)](https://www.npmjs.com/package/react-rerender-test) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Before start using this package, please read this [article](https://medium.com/@naveenda/simplest-way-to-find-react-component-re-rendering-b9c186c8694f) to find this thing useful to you or not.

https://medium.com/@naveenda/simplest-way-to-find-react-component-re-rendering-b9c186c8694f

Demo: https://st8rc.csb.app/

## Install

```bash
npm install --save react-rerender-test
```

## Usage

```tsx
import React, { Component } from 'react'

import  RerenderTest  from 'react-rerender-test'


class Example extends Component {
  render() {
    return <RerenderTest />
  }
}
```

## License

MIT © [NaveenDA](https://github.com/NaveenDA)
