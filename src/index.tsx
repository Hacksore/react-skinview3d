// TODO: get react transform working
import React, { useEffect, useRef } from "react";
import * as skinview3d from "skinview3d";

// TODO: offscreen canvas support

interface ISkinview3d {
  className?: any; // TODO: type this
  width?: number;
  height?: number;
  skinUrl?: string;
  capeUrl?: string;
  onReady?: Function;
}

const Skinview3d = ({
  className,
  width,
  height,
  skinUrl,
  capeUrl,
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

    // handle cape/skin load intitially
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
      style={{ imageRendering: "pixelated" }} // TODO: should be configurable
    />
  );
};

export default Skinview3d;
