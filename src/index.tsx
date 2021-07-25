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
  config?: any;
}

const Skinview3d = ({
  className,
  width,
  height,
  skinUrl,
  capeUrl,
  enableOrbitControls = false,
  onReady,
  config
}: ISkinview3d) => {
  const canvasRef = useRef();
  const skinviewRef = useRef();

  useEffect(() => {
    const viewer = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: width,
      height: height,
    });

    console.log("skinUrl", skinUrl)
    console.log("config", config)

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

    // call onReady
    onReady(viewer);

  }, []);

  return (
    <canvas
      className={className}
      ref={canvasRef}
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default Skinview3d;
