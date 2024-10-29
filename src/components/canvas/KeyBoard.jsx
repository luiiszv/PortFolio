import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const KeyBoard = () => {
 const keyBoard = useGLTF('/PortFolio/keyboard/scene.gltf');
    return (
        <mesh>
            {/* Luz ambiental para iluminar suavemente toda la escena */}
            <ambientLight intensity={0.5} />
            
            {/* Luz hemisférica para agregar luz del cielo y la tierra */}
            <hemisphereLight intensity={0.35} groundColor="white" />

            {/* Luz direccional para simular el sol */}
            <directionalLight 
                intensity={1.5} 
                position={[5, 10, 5]} 
                shadow-mapSize-width={1024} 
                shadow-mapSize-height={1024} 
                castShadow 
            />

            {/* Luz puntual para un efecto adicional, como una luz local */}
            <pointLight intensity={1.5} position={[-20, 50, 10]} />

            {/* El modelo 3D del teclado */}
            <primitive
                object={keyBoard.scene}
                scale={0.15}
                position={[0, -1, 0]} // Ajuste de la posición para que se vea bien en la escena
            />
        </mesh>
    );
}

const KeyBoardCanvas = () => {
    return (
        <Canvas
            frameloop='demand'  // Se actualiza cuando hay cambios
            shadows
            camera={{ position: [10, 10, 10], fov: 25 }}  // Mejor vista de la cámara para el modelo
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />} />

            {/* Controles orbitales para rotar la vista */}
            <OrbitControls enableZoom={false}   autoRotate />

            {/* El componente con el modelo y las luces */}
            <KeyBoard />

            {/* Precarga todos los assets antes de renderizar */}
            <Preload all />

        </Canvas>
    );
}

export default KeyBoardCanvas;
