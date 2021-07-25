// TODO: get react transform working
import React, { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";
interface ISkinview3d {
  className?: any; // TODO: type this
  width?: number;
  height?: number;
  skinUrl?: string;
  capeUrl?: string;
  onReady?: Function;
  enableOrbitControls?: boolean;
}

const Skinview3d = ({
  className,
  width,
  height,
  skinUrl,
  capeUrl,
  enableOrbitControls = false,
  onReady,
}: ISkinview3d) => {
  const canvasRef = useRef();
  const skinviewRef = useRef<any>();

  useEffect(() => {
    const viewer = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: width,
      height: height,
    });

    viewer.loadSkin(skinUrl);
    viewer.loadCape(capeUrl);

    if (enableOrbitControls) {
      const control = skinview3d.createOrbitControls(viewer);
      control.enableRotate = true;
      control.enableZoom = false;
      control.enablePan = false;
    }

    // @ts-ignore
    skinviewRef.current = viewer;

    // call onReady with the viewer instance
    if (onReady) {
      onReady(viewer);
    }

  }, []);

  // skin url changes
  useEffect(() => {
    skinviewRef.current.loadSkin(skinUrl);
  }, [skinUrl]);

  // cape url changes
  useEffect(() => {
    skinviewRef.current.loadCape(capeUrl);
  }, [capeUrl]);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default Skinview3d;
