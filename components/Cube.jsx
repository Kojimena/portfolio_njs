import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {Canvas, useLoader} from "@react-three/fiber";
import React, { Suspense } from "react";
import { TextureLoader } from 'three';



const Cube = () => {

  return (
    <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Sphere args={[1, 100, 400]} scale={2.4}>
                <MeshDistortMaterial
                  color="#fff"
                  distort={0.6}
                  speed={0.8}
                  roughness={0.2}
                  metalness={0.4}
                />
              </Sphere>
            </Suspense>
    </Canvas>
  )
}

export default Cube
