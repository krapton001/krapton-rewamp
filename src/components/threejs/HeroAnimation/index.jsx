'use client';
import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const TechObject = () => {
    const nodeRef = useRef();

    // Generate random nodes
    const nodes = useMemo(() => {
        const points = [];
        for (let i = 0; i < 13; i++) {
            points.push(new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10));
        }
        return points;
    }, []);

    // Rotate the nodes
    useFrame(() => {
        if (nodeRef.current) {
            nodeRef.current.rotation.x += 0.001;
            nodeRef.current.rotation.y += 0.001;
        }
    });

    return (
        <group ref={nodeRef}>
            {nodes.map((point, index) => (
                <mesh key={index} position={point}>
                    <sphereGeometry args={[0.1, 16, 16]} />
                    <meshBasicMaterial color={'white'} />
                </mesh>
            ))}
            {nodes.map((point, index) => nodes.map((otherPoint, otherIndex) => index !== otherIndex && <Line key={`${index}-${otherIndex}`} points={[point, otherPoint]} color={'white'} />))}
        </group>
    );
};

const HeroAnimation = () => {
    return (
        <Canvas style={{ zIndex: '-1', position: 'absolute' }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <TechObject />
            <OrbitControls />
        </Canvas>
    );
};

export default HeroAnimation;