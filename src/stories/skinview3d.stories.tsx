import React from "react";
import Skinview3d from "..";
import { withKnobs, radios, number } from "@storybook/addon-knobs";
import * as skinview3d from "skinview3d";

export default {
  title: "All stories",
  decorators: [withKnobs],
};

export const basic = () => (
  <Skinview3d
    skinUrl="textures/skin-legacyhat-default-no_hd.png"
    height={300}
    width={150}
    onReady={(instance: skinview3d.SkinViewer) => {
      console.log(instance);
    }}
  />
);

export const noOrbit = () => (
  <Skinview3d
    className='viewer'
    skinUrl="textures/skin-legacyhat-default-no_hd.png"
    height={300}
    width={150}
    enableOrbitControls={false}
  />
);

export const basicWithKnobs = () => {

  const options: any = [
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

  const width = number('Width', 150, numberOptions);
  const height = number('Height', 300, numberOptions);

  return <Skinview3d
    className='viewer'
    skinUrl={value}
    height={height}
    width={width}
  />
};

export const multiple = () => (
  <div style={{ display: 'flex', flexDirection: 'row',  }}>
    <Skinview3d
      className='viewer'
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      height={300}
      width={120}
    />
    <Skinview3d
      className='viewer'
      skinUrl="textures/skin-1.8-default-no_hd.png"
      height={300}
      width={120}
    />
    <Skinview3d
      skinUrl="textures/skin-1.8-slim-no_hd.png"
      height={300}
      width={120}
    />
  </div>
);

export const withAnimation = () => {
  return <Skinview3d
    className='viewer'
    skinUrl="textures/skin-legacyhat-default-no_hd.png"
    height={300}
    width={150}
    onReady={(skinViewer: skinview3d.SkinViewer) => {
      // TODO:
      // Add an animation
      skinViewer.animations.add(skinview3d.WalkingAnimation);
      // Add another animation
      skinViewer.animations.add(skinview3d.RotatingAnimation);
    }}
  />
};

export const withCape = () => {
  return <Skinview3d
    className='viewer'
    skinUrl="textures/skin-legacyhat-default-no_hd.png"
    capeUrl="textures/mojang-classic-cape.png"
    height={300}
    width={150}
  />
};
