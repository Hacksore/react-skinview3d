import React, { Component } from 'react';

import Skinview3d from 'react-skinview3d';

import './index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-legacyhat-default-no_hd.png"
          height="300"
          width="300"
        />

        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-1.8-slim-no_hd.png"
          height="300"
          width="300"
        />

        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-1.8-default-no_hd.png"
          height="300"
          width="300"
        />
        <hr />
        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-legacyhat-default-no_hd.png"
          height="100"
          width="100"
        />

        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-1.8-slim-no_hd.png"
          height="100"
          width="100"
        />

        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-1.8-default-no_hd.png"
          height="100"
          width="100"
        />
        <hr />
        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-legacyhat-default-no_hd.png"
          height="500"
          width="500"
        />

        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-1.8-slim-no_hd.png"
          height="500"
          width="500"
        />

        <Skinview3d
          className='viewer'
          skinUrl="textures/skin-1.8-default-no_hd.png"
          height="500"
          width="500"
        />
      </div>
    )
  }
}
