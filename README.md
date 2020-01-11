# react-skinview3d

> A react component for skinview3d Minecraft viewer

[![NPM](https://img.shields.io/npm/v/react-skinview3d.svg)](https://www.npmjs.com/package/react-skinview3d)

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
      <Skinview3d
        skinUrl="textures/skin-1.8-slim-no_hd.png"
        capeUrl="textures/minecon-cape-2016.png"
        height="500"
        width="500"
      />
    )
  }
}
```
**Props:**

Name | Type | Description | Default |
------ | ------ | ------ | ------ |
`skinUrl` | string, required | Skin URL | |
`capeUrl` | string | Cape URL | |
`width` | number, string | Element width | 600 |
`height` | number, string | Element height | 600 |
||||
`run` | boolen | Enable run animation | false |
`runSpeed` | number, string | Speed run animation | 1 |
`runPaused` | boolen | Pause run animation | false |
||||
`walk` | boolen | Enable walk animation | false |
`walkSpeed` | number, string | Speed walk animation | 1 |
`walkPaused` | boolen | Pause walk animation | false |

## License

MIT © [Hacksore](https://github.com/Hacksore)
