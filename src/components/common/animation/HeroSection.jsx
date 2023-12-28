import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import GradientButton from '../gradientButton';

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

const HeroSection = () => {
    return (
        <div id="hero-section" className="">
            <Canvas style={{ zIndex: '-1' }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <TechObject />
                <OrbitControls />
            </Canvas>
            <div className="hero-text">
                <h1>Transforming Visions into Digital Realities</h1>
                <p>Reliable IT Services to Power Your Business Success</p>
                <p>Expertise in software, web app, and mobile app development that drives results.</p>
                <div
                    className="tp-hero-five-btn-box btn-section d-flex wow tpfadeUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".7s"
                    style={{ visibility: 'visible', animationDuration: '0.9s', animationDelay: '0.7s', animationName: 'tpfadeUp' }}
                >
                    <GradientButton to="/hire-us">Let's Talk</GradientButton>
                    <GradientButton type="outline" to="/services" className="mx-2">
                        Our Services
                    </GradientButton>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
