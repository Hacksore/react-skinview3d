import React from "react";
import ReactSkinview3d from "..";
import { withKnobs, radios, number } from "@storybook/addon-knobs";
import { WalkingAnimation } from "skinview3d";
import { useRef, useState } from "react";
import { SkinViewer } from "skinview3d";
import { RadiosTypeOptionsProp } from "@storybook/addon-knobs/dist/components/types";

export default {
  title: "All stories",
  decorators: [withKnobs],
};

export const basic = () => (
  <ReactSkinview3d skinUrl="textures/skin-legacyhat-default-no_hd.png" height={300} width={150} />
);

export const basicWithKnobs = () => {
  // TODO: move to controls instead of knobs
  // TIHI
  const options: RadiosTypeOptionsProp<string> = {
    "skin-legacyhat-default-no_hd.png": "textures/skin-legacyhat-default-no_hd.png",
    "skin-1.8-default-no_hd.png": "textures/skin-1.8-default-no_hd.png",
    "skin-1.8-slim-no_hd.png": "textures/skin-1.8-slim-no_hd.png",
    "skin-old-default-no_hd.png": "textures/skin-old-default-no_hd.png",
  };

  const value = radios("Skin URL", options, "textures/skin-legacyhat-default-no_hd.png");

  const numberOptions = {
    range: true,
    min: 128,
    max: 1024,
    step: 1,
  };

  const width = number("Width", 150, numberOptions);
  const height = number("Height", 300, numberOptions);

  return <ReactSkinview3d className="viewer" skinUrl={value} height={height} width={width} />;
};

export const multiple = () => (
  <div style={{ display: "flex", flexDirection: "row" }}>
    <ReactSkinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      height={300}
      width={120}
    />
    <ReactSkinview3d
      className="viewer"
      skinUrl="textures/skin-1.8-default-no_hd.png"
      height={300}
      width={120}
    />
    <ReactSkinview3d skinUrl="textures/skin-1.8-slim-no_hd.png" height={300} width={120} />
  </div>
);

export const withAnimation = () => {
  return (
    <ReactSkinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      height={300}
      width={150}
      onReady={({ viewer }) => {
        // Add an animation
        viewer.animation = new WalkingAnimation();
        // Enabled auto rotate
        viewer.autoRotate = true;
      }}
    />
  );
};

export const cape = () => {
  return (
    <ReactSkinview3d
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
    <ReactSkinview3d
      className="viewer"
      skinUrl="textures/skin-legacyhat-default-no_hd.png"
      height={300}
      width={150}
      onReady={({ viewer }) => {
        viewer.autoRotate = false;
        viewer.controls.enablePan = false;
        viewer.controls.enableRotate = false;
        viewer.controls.enableZoom = false;
      }}
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
  };

  return (
    <div>
      <ReactSkinview3d
        className="viewer"
        skinUrl="textures/skin-legacyhat-default-no_hd.png"
        height="300"
        width="150"
        onReady={({ viewer }) => {
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
