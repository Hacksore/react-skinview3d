import { useEffect, useRef } from "react";
import { SkinViewer, SkinViewerOptions } from "skinview3d";

/**
 * This is the interface that describes the parameter in `onReady`
 */
export interface ViewerReadyCallbackOptions {
  /**
   * The instance of the skinview3d
   */
  viewer: SkinViewer;
  /**
   * The ref to the canvas element
   */
  canvasRef: HTMLCanvasElement;
}

export interface ReactSkinview3dOptions {
  /**
   * The class names to apply to the canvas
   */
  className?: string;
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
   * A function that is called when the skin viewer is ready
   * @param {SkinViewer} instance callback function to execute when the viewer is loaded {@link SkinViewer}
   * @example
   * onReady((instance) => {
   *  console.log(instance)
   * })
   */
  onReady?: ({ viewer, canvasRef }: ViewerReadyCallbackOptions) => void;
  /**
   * Parameters passed to the skinview3d constructor allowing you to override or add extra features
   * @notes please take a look at the upstream repo for more info
   * [bs-community/skinview3d](https://bs-community.github.io/skinview3d/)
   */
  options?: SkinViewerOptions;
}

/**
 * A skinview3d component
 */
const ReactSkinview3d = ({
  className,
  width,
  height,
  skinUrl,
  capeUrl,
  onReady,
  options,
}: ReactSkinview3dOptions): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>();
  const skinviewRef = useRef<SkinViewer>();

  useEffect(() => {
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
    skinviewRef.current.setSize(Number(width), Number(height));
  }, [width, height]);

  return <canvas className={className} ref={canvasRef} />;
};

export default ReactSkinview3d;
