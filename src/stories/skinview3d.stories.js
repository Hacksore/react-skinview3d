import React from 'react';
import Skinview3d from '..';

export default {
  title: 'Stories',
};

export const basic = () => (
  <Skinview3d
    className='viewer'
    skinUrl={require("../textures/skin-legacyhat-default-no_hd.png")}
    height="600"
    width="600"
  />
);

export const multiple = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Skinview3d
      className='viewer'
      skinUrl={require("../textures/skin-legacyhat-default-no_hd.png")}
      height="300"
      width="300"
    />
    <Skinview3d
      className='viewer'
      skinUrl={require("../textures/skin-1.8-default-no_hd.png")}
      height="300"
      width="300"
    />
    <Skinview3d
      className='viewer'
      skinUrl={require("../textures/skin-1.8-slim-no_hd.png")}
      height="300"
      width="300"
    />
  </div>
);
