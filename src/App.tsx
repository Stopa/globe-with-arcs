import { Canvas, extend, Object3DNode, useThree } from "@react-three/fiber";
import ThreeGlobe from "three-globe";
import { arcData } from "./data";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Html, OrbitControls } from "@react-three/drei";
import "./App.css";

extend({ ThreeGlobe });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
    }
  }
}

function App() {
  return (
    <div className="canvas">
      <Canvas style={{ background: "midnightblue" }}>
        <CameraSetup />
        <ambientLight color={0xcccccc} intensity={Math.PI} />
        <directionalLight color={0xffffff} intensity={0.6 * Math.PI} />
        <Globe />
      </Canvas>
    </div>
  );
}

const globeArgs = [{ waitForGlobeReady: false, animateIn: false }];

function Globe() {
  const globeRef = useRef<ThreeGlobe>(null);
  const [arcCompletion, setArcCompletion] = useState("0");

  useLayoutEffect(() => {
    if (globeRef.current) {
      globeRef.current.globeImageUrl(
        "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      );

      globeRef.current.arcsData(arcData);
      globeRef.current.arcColor(["red", "yellow"]);
      globeRef.current.arcStroke(0.22);
      globeRef.current.arcsTransitionDuration(0);
    }
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const num = parseFloat(arcCompletion);

      globeRef.current.arcDashInitialGap(1 - num);
    }
  }, [arcCompletion]);

  return (
    <>
      <threeGlobe ref={globeRef} args={globeArgs} />
      <ArcControl
        value={arcCompletion}
        onChange={(e) => setArcCompletion(e.currentTarget.value)}
      />
    </>
  );
}

function ArcControl({ value, onChange }) {
  return (
    <Html>
      {createPortal(
        <div className="controls">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={value}
            onChange={onChange}
          />
        </div>,
        document.body
      )}
    </Html>
  );
}

function CameraSetup() {
  const { camera } = useThree();

  useLayoutEffect(() => {
    camera.position.z = 500;
  }, []);

  return <OrbitControls />;
}

export default App;
