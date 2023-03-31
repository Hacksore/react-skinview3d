import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ReactSkinview3d from "..";

const meta = {
  title: "Example/Basic",
  component: ReactSkinview3d,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
} satisfies Meta<typeof ReactSkinview3d>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <ReactSkinview3d skinUrl="textures/skin-legacyhat-default-no_hd.png" height={300} width={150} />
  ),
};
