# react-skinview3d

Three.js powered Minecraft skin viewer component for react - see upstream project for more info [skinview3d](https://github.com/bs-community/skinview3d)

[![NPM](https://img.shields.io/npm/v/react-skinview3d.svg)](https://www.npmjs.com/package/react-skinview3d)

## Install

```bash
npm install --save react-skinview3d
```

## Usage

```jsx
import React, { Component } from "react"
import Skinview3d from "react-skinview3d"

const App () => {

  return (
    <Skinview3d
      skinUrl="textures/skin-1.8-slim-no_hd.png"
      capeUrl="textures/minecon-cape-2016.png"
      height="500"
      width="500"
    />
  )

}
```

## License

MIT © [Hacksore](https://github.com/Hacksore)
