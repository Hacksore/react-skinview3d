import React from "react";
import Skinview3d from "..";
import { withKnobs, radios, number } from "@storybook/addon-knobs";
import * as skinview3d from "skinview3d";
import { useRef, useState } from "react";
import { SkinViewer } from "skinview3d";

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

export const basicWithKnobs = () => {
  const options: any = [
    "textures/skin-legacyhat-default-no_hd.png",
    "textures/skin-1.8-default-no_hd.png",
    "textures/skin-1.8-slim-no_hd.png",
    "textures/skin-old-default-no_hd.png",
  ];

  const value = radios("Skin URL", options, "textures/skin-legacyhat-default-no_hd.png");

  const numberOptions = {
    range: true,
    min: 128,
    max: 1024,
    step: 1,
  };

  const width = number("Width", 150, numberOptions);
  const height = number("Height", 300, numberOptions);

  return <Skinview3d className="viewer" skinUrl={value} height={height} width={width} />;
};

export const multiple = () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <Skinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      height={300}
      width={120}
    />
    <Skinview3d
      className="viewer"
      skinUrl="textures/skin-1.8-default-no_hd.png"
      height={300}
      width={120}
    />
    <Skinview3d skinUrl="textures/skin-1.8-slim-no_hd.png" height={300} width={120} />
  </div>
);

export const withAnimation = () => {
  return (
    <Skinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      height={300}
      width={150}
      onReady={(skinViewer: skinview3d.SkinViewer) => {
        // Add an animation
        skinViewer.animation = new skinview3d.WalkingAnimation();
        // Add another animation
        skinViewer.autoRotate = true;
      }}
    />
  );
};

export const cape = () => {
  return (
    <Skinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      capeUrl="textures/mojang-classic-cape.png"
      height={300}
      width={150}
    />
  );
};

export const controlsDisabled = () => {
  return (
    <Skinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      height={300}
      width={150}
      onReady={(skinViewer: skinview3d.SkinViewer) => {
        skinViewer.autoRotate = false;
        skinViewer.controls.enablePan = false;
        skinViewer.controls.enableRotate = false;
        skinViewer.controls.enableZoom = false;
      }}
    />
  );
};

export const noPixelated = () => {
  return (
    <Skinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      disablePixelated
      height="300"
      width="150"
    />
  );
};

export const screenshotExample = () => {
  const [url, setUrl] = useState("");
  const viewerRef = useRef<SkinViewer>();

  const handleScreenshot = () => {
    if (!viewerRef.current) return;

    const iconUrl = viewerRef.current.canvas.toDataURL("image/png");

    setUrl(iconUrl);
  }

  return (
    <div>
      <Skinview3d
        className="viewer"
        skinUrl="textures/skin-legacyhat-default-no_hd.png"
        disablePixelated
        height="300"
        width="150"
        onReady={(viewer: SkinViewer) => {
          viewerRef.current = viewer;
        }}
        options={{
          preserveDrawingBuffer: true,
        }}
      />

      <button onClick={handleScreenshot}>Take screenshot</button>

      <img src={url} />
    </div>
  );
};