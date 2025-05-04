import { useEffect, useRef } from "react";
import { SkinViewer, type SkinViewerOptions } from "skinview3d";
import type { HTMLAttributes } from "react";

/**
 * Interface describing the callback parameters when the skin viewer is ready
 */
export interface ViewerReadyCallbackOptions {
  /**
   * The instance of the skinview3d viewer that can be used to control the skin display
   */
  viewer: SkinViewer;
  /**
   * The reference to the canvas element where the skin is rendered
   */
  canvasRef: HTMLCanvasElement;
}

/**
 * Props interface for the ReactSkinview3d component
 */
export interface ReactSkinview3dOptions {
  /**
   * CSS class names to apply to the canvas element
   */
  className?: HTMLAttributes<HTMLCanvasElement>["className"];
  /**
   * The width of the canvas in pixels or as a CSS value
   */
  width: number | string;
  /**
   * The height of the canvas in pixels or as a CSS value
   */
  height: number | string;
  /**
   * URL of the Minecraft skin texture to display
   */
  skinUrl: string;
  /**
   * Optional URL of the Minecraft cape texture to display
   */
  capeUrl?: string;
  /**
   * A callback function that is called when the skin viewer is ready
   * @param {ViewerReadyCallbackOptions} options - The options object containing the viewer instance and canvas reference
   * @param {SkinViewer} options.viewer - The instance of the skinview3d viewer
   * @param {HTMLCanvasElement} options.canvasRef - The reference to the canvas element
   * @example
   * ```tsx
   * onReady={({ viewer, canvasRef }) => {
   *   // Access the viewer instance
   *   viewer.autoRotate = true;
   *   // Access the canvas element
   *   console.log(canvasRef);
   * }}
   * ```
   */
  onReady?: ({ viewer, canvasRef }: ViewerReadyCallbackOptions) => void;
  /**
   * Additional configuration options passed directly to the skinview3d constructor
   * @see [skinview3d documentation](https://bs-community.github.io/skinview3d/) for available options
   */
  options?: SkinViewerOptions;
}

/**
 * React component that renders a 3D Minecraft skin viewer
 * @param {ReactSkinview3dOptions} props - The component props
 * @returns {React.ReactElement} A canvas element with the 3D skin viewer
 */
const ReactSkinview3d = ({
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

export default ReactSkinview3d;
