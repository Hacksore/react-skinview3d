import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ReactSkinview3d from "..";

const meta = {
  title: "Controls",
  tags: ["autodocs"],
  args: {
    skinUrl: "textures/skin-legacyhat-default-no_hd.png",
    width: 200,
    height: 400,
  },
} satisfies Meta<typeof ReactSkinview3d>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  argTypes: {
    skinUrl: {
      defaultValue: "textures/skin-legacyhat-default-no_hd.png",
      options: [
        "textures/skin-legacyhat-default-no_hd.png",
        "textures/skin-1.8-default-no_hd.png",
        "textures/skin-1.8-slim-no_hd.png",
        "textures/skin-old-default-no_hd.png",
      ],
      control: { type: "select" },
    },
    width: { control: { type: "range", min: 200, max: 800, step: 2 } },
    height: { control: { type: "range", min: 200, max: 800, step: 2 } },
  },
  // TODO: fix types?
  // @ts-ignore
  render: ({ skinUrl, width, height }) => {
    return <ReactSkinview3d skinUrl={skinUrl} width={width} height={height} />;
  },
};
