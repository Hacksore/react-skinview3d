import React, { useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ReactSkinview3d } from "..";
import type { SkinViewer } from "skinview3d";
import { WalkingAnimation } from "skinview3d";

const meta: Meta<typeof ReactSkinview3d> = {
  title: "Examples",
  component: ReactSkinview3d,
  tags: ["autodocs"],
  argTypes: {
    width: {
      control: { type: "number" },
      description: "Width of the canvas in pixels",
      defaultValue: 150,
    },
    height: {
      control: { type: "number" },
      description: "Height of the canvas in pixels",
      defaultValue: 300,
    },
    skinUrl: {
      control: { type: "select" },
      options: [
        "textures/skin-legacyhat-default-no_hd.png",
        "textures/skin-1.8-default-no_hd.png",
        "textures/skin-1.8-slim-no_hd.png",
        "textures/skin-old-default-no_hd.png",
      ],
      description: "Select a skin texture to display",
    },
    capeUrl: {
      control: { type: "text" },
      description: "Optional URL of the Minecraft cape texture",
    },
    className: {
      control: { type: "text" },
      description: "CSS class names to apply to the canvas element",
    },
    onReady: {
      control: false,
      description: "Callback function when the skin viewer is ready",
    },
    options: {
      control: false,
      description: "Additional configuration options for skinview3d",
    },
  },
  args: {
    width: 150,
    height: 300,
    skinUrl: "textures/skin-legacyhat-default-no_hd.png",
  },
} satisfies Meta<typeof ReactSkinview3d>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    skinUrl: "textures/skin-legacyhat-default-no_hd.png",
    height: 300,
    width: 150,
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
      <ReactSkinview3d
        skinUrl="textures/skin-1.8-slim-no_hd.png"
        height={300}
        width={120}
      />
    </div>
  ),
};

export const Animation: Story = {
  args: {
    className: "viewer",
    skinUrl: "textures/skin-legacyhat-default-no_hd.png",
    height: 300,
    width: 150,
  },
  render: (args) => (
    <ReactSkinview3d
      {...args}
      onReady={({ viewer }) => {
        // Add an animation
        viewer.animation = new WalkingAnimation();
        // Enabled auto rotate
        viewer.autoRotate = true;
      }}
    />
  ),
};

export const Interactive: Story = {
  args: {
    skinUrl: "textures/skin-legacyhat-default-no_hd.png",
    height: 300,
    width: 150,
    className: "viewer",
  },
  argTypes: {
    ...meta.argTypes,
    skinUrl: {
      control: { type: "select" },
      options: [
        "textures/skin-legacyhat-default-no_hd.png",
        "textures/skin-1.8-default-no_hd.png",
        "textures/skin-1.8-slim-no_hd.png",
        "textures/skin-old-default-no_hd.png",
      ],
      description: "Select a skin texture to display",
    },
    capeUrl: {
      control: { type: "select" },
      options: [
        "",
        "textures/mojang-classic-cape.png",
      ],
      description: "Select a cape texture to display",
    },
  },
};

export const Screenshot: Story = {
  render: () => {
    const [url, setUrl] = useState("");
    const viewerRef = useRef<SkinViewer>(null);

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

        <button type="button" onClick={handleScreenshot}>
          Take screenshot
        </button>

        <img alt="screenshot" src={url} />
      </div>
    );
  },
};
