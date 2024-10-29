import { Suspense, useEffect, useState } from 'react'

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Computers = ({ isMobile }) => {

  const computer = useGLTF('desktop_pc/scene.gltf')
  return (
    <mesh>
      <ambientLight intensity={0.5} />

      <hemisphereLight intensity={0.35} groundColor="black" />

      <directionalLight
        intensity={1.5}
        position={[5, 10, 5]}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        castShadow
      />

      <pointLight intensity={2} position={[-20, 50, 10]} />

      <primitive object={computer.scene} scale={isMobile ? 0.4 : 0.75} position={isMobile ? [0, -3, -0.8] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]}>

      </primitive>
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    const mediaQuery = window.matchMedia('(max-width: 500px)');

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);




    }

    mediaQuery.addEventListener('change',
      handleMediaQueryChange
    )

    return () => {
      mediaQuery.removeEventListener('change',
        handleMediaQueryChange
      )
    }
  }, [])


  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={isMobile ? {position: [50, 3, 5], fov:25 } : { position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />} >

        <OrbitControls
       
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}


        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )

}

export default ComputersCanvas