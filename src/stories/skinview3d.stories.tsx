import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ReactSkinview3d from "..";
import { SkinViewer, WalkingAnimation } from "skinview3d";

const meta: Meta<typeof ReactSkinview3d> = {
  title: "Examples",
  component: ReactSkinview3d,
  tags: ["autodocs"],
} satisfies Meta<typeof ReactSkinview3d>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => {
    return (
      <ReactSkinview3d
        skinUrl="textures/skin-legacyhat-default-no_hd.png"
        height={300}
        width={150}
      />
    );
  },
};

export const Multiple: Story = {
  render: () => (
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
  ),
};

export const Animation: Story = {
  render: () => (
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
  ),
};

export const Screenshot: Story = {
  render: () => {
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
  },
};

export const ButtonWithUuid: Story = {
  render: () => {
    const [uuid, setUuid] = useState("generate a new UUID...");
    const viewerRef = useRef<SkinViewer>();

    return (
      <div>
        <button
          onClick={() => {
            setUuid(window.crypto.randomUUID());
          }}
        >
          Make UUID (test)
        </button>
        <div>{uuid}</div>
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
      </div>
    );
  },
};
