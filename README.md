# react-skinview3d

> A react component for skinview3d Minecraft viewer

[![NPM](https://img.shields.io/npm/v/react-skinview3d.svg)](https://www.npmjs.com/package/react-skinview3d) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-skinview3d
```

## Usage

```jsx
import React, { Component } from 'react'

import Skinview3d from 'react-skinview3d'

class ExampleApp extends Component {
  render () {
    return (
      <React.Fragment>
        <Skinview3d
          skinUrl="textures/skin-1.8-slim-no_hd.png"
          capeUrl="textures/minecon-cape-2016.png"
          height="500"
          width="500"
        />
      </React.Fragment>
    )
  }
}
```

## License

MIT © [Hacksore](https://github.com/Hacksore)
