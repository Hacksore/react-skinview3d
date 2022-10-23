import React, { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";
import { SkinViewerOptions } from "skinview3d";

interface ISkinview3d {
  /**
   * The class names to apply to the canvas
   */
  className?: string,
  /**
   * The width of the canvas
   */
  width: number | string;
  /**
   * The height of the canvas
   */
  height: number | string;
  /**
   * The skin to load in the canvas
   */
  skinUrl: string;
  /**
   * The cape to load in the canvas
   */
  capeUrl?: string;
  /**
   * Control if the canvas should have `pixelated` for `imageRendering` disabled
   * @defaultValue false
   */
   disablePixelated?: boolean
  /**
   * A function that is called when the skin viewer is ready
   */
  onReady?: (skinview3d: skinview3d.SkinViewer) => void;
  /**
   * Parameters passed to the skinview3d constructor allowing you to override pr
   */
  options?: SkinViewerOptions
}

/**
 * A skinview3d component
 */
const Skinview3d = ({
  className,
  width,
  height,
  skinUrl,
  capeUrl,
  onReady,
  disablePixelated = false,
  options
}: ISkinview3d) => {

  const canvasRef = useRef();
  const skinviewRef = useRef<any>();

  useEffect(() => {
    const viewer = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: Number(width),
      height: Number(height),
      ...options
    });

    // handle cape/skin load initially
    skinUrl && viewer.loadSkin(skinUrl);
    capeUrl && viewer.loadCape(capeUrl);

    // @ts-ignore
    skinviewRef.current = viewer;

    // call onReady with the viewer instance
    if (onReady) {
      onReady(viewer);
    }

  }, []);

  // skin url changes
  useEffect(() => {
    skinUrl && skinviewRef.current.loadSkin(skinUrl);
  }, [skinUrl]);

  // cape url changes
  useEffect(() => {
    capeUrl && skinviewRef.current.loadCape(capeUrl);
  }, [capeUrl]);

  // size changes
  useEffect(() => {
    skinviewRef.current.setSize(width, height)
  }, [width, height]);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      style={{ imageRendering: disablePixelated ? "auto" :  "pixelated" }}
    />
  );
};

export default Skinview3d;
