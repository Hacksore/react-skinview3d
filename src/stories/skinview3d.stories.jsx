import React from 'react';
import Skinview3d from '..';
import { radios, number } from '@storybook/addon-knobs';
import { withKnobs } from '@storybook/addon-knobs/react';

export default {
  title: 'All stories',
  decorators: [withKnobs]
};

export const basic = () => (
  <Skinview3d
    className='viewer'
    skinUrl={require('../textures/skin-legacyhat-default-no_hd.png')}
    height="600"
    width="600"
    onReady={(instance) => {
      // eslint-disable-next-line no-undef
      console.log(instance);
    }}
  />
);

export const basicWithKnobs = () => {

  const options = [
    'textures/skin-legacyhat-default-no_hd.png',
    'textures/skin-1.8-default-no_hd.png',
    'textures/skin-1.8-slim-no_hd.png',
    'textures/skin-old-default-no_hd.png',
  ]

  const value = radios('Skin URL', options, 'textures/skin-legacyhat-default-no_hd.png');

  const numberOptions = {
    range: true,
    min: 128,
    max: 1024,
    step: 1,
 };

  const width = number('Width', 600, numberOptions);
  const height = number('Height', 600, numberOptions);

  return <Skinview3d
    className='viewer'
    skinUrl={require(`../${value}`)}
    height={height}
    width={width}
  />
};

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
      skinUrl={require("../textures/skin-1.8-slim-no_hd.png")}
      height="300"
      width="300"
    />
  </div>
);
