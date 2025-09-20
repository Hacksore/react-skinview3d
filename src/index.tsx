import { useEffect, useRef } from "react";
import { SkinViewer } from "skinview3d";
import type { ReactSkinview3dOptions } from "./types.js";

/**
 * React component that renders a 3D Minecraft skin viewer
 * @param {ReactSkinview3dOptions} props - The component props
 * @returns {React.ReactElement} A canvas element with the 3D skin viewer
 */
export const ReactSkinview3d = ({
  className,
  width,
  height,
  skinUrl,
  capeUrl,
  onReady,
  options,
}: ReactSkinview3dOptions): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const skinviewRef = useRef<SkinViewer>(null);

  useEffect(() => {
    // skip if the viewer instance has already been created
    if (skinviewRef.current) {
      return;
    }

    const viewer = new SkinViewer({
      canvas: canvasRef.current,
      width: Number(width),
      height: Number(height),
      ...options,
    });

    // handle cape/skin load initially
    skinUrl && viewer.loadSkin(skinUrl);
    capeUrl && viewer.loadCape(capeUrl);

    skinviewRef.current = viewer;

    // call onReady with the viewer instance
    if (onReady) {
      onReady({ viewer: skinviewRef.current, canvasRef: canvasRef.current });
    }
  }, [width, height, skinUrl, capeUrl, onReady, options]);

  // skin url changes
  useEffect(() => {
    skinUrl
      ? skinviewRef.current.loadSkin(skinUrl)
      : skinviewRef.current.resetSkin();
  }, [skinUrl]);

  // cape url changes
  useEffect(() => {
    capeUrl
      ? skinviewRef.current.loadCape(capeUrl)
      : skinviewRef.current.resetCape();
  }, [capeUrl]);

  // size changes
  useEffect(() => {
    skinviewRef.current.setSize(Number(width), Number(height));
  }, [width, height]);

  return <canvas className={className} ref={canvasRef} />;
};
