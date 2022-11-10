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

export const base64 = () => {
  const base64SkinImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAYAAACinX6EAAACeElEQVRoQ+2YsU7DMBCG464UIdSJoRlgRixsSBW0gqFC5dEYGHgR1A2JkQGpQioji7OwVAKpc8M5jYvt2GcnTpO0xShqqePL+fN/d3ZIEMNfnY0EZM2PH4D9Z9MzyA4AOIHJf+4yAKYwo8o3QQG2ELWF0NYDaGErbMsvm6AA2xy8+v8B7EAVQBXSBAWIMcwTXqG47nQ6i9lsxpKe83h3AAR8i9OEK373ikAYTCRnvQCAtUVisXQAugmXBeEPgFrunFeRrUH7oL2Y/8zFkug03q4APlGdAsqAIAAYDoeJnsbjMftwmgAXIAPQu+glAPKMtwPwlbht/PIswC4mX7HlAqDZCziNbwoANnGvENCMt+0QE9juAJjcxcYTom2Fbf3yaRDdttpMFel3B1DEusuY7HG4Ugg6mUhLHceZs0iLEFUOsjaweWvsSbeDbTR2u93uyqEoirKBI5dVnSvH8GMPrnO43jYaAJtdRAGC2OwAlNuzjFAFwAodwpBvZJXR46uDAo7A9pfJvqiAsgCcgaH39IFMHtLbk6aFAPgXA4QVnzIUYHvhgKYy5kwSi9BEx7BBvver47H/oQ/NKd4ZVweAO6RC4IBMDue932Yv9a16AJTSAHKFXBqgmoRhmPxWJQAKCgBPkHeCSCeq/bRTp4AmAaglBPIC2L9b5pCPh5RqKp4wTXZ5Yl5VWG0AdOoxhcBWAsiTA9YM4AoW48UUzmupAk0KAUohCbITj6E1AkDRsulSBh+j6PQ2CKaVAig6oVr2AaPRyGsnOJlMSqvrJgAu5dh0j6kKwBb/8mYweCLwxQsAz+w+TqLbZvW0l/dBhtPhdb8/f53e7/0CBtH0QFVW1GkAAAAASUVORK5CYII=";
  return (
    <ReactSkinview3d
      className="viewer"
      skinUrl={base64SkinImage}
      height={300}
      width={150}
    />
  );
};
