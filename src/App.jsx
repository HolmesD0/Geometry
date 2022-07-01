import React, { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

function Geometry(props) {
    const ref = useRef()
    useFrame(() => {
    });
    return (
        <mesh
            {...props}
            ref={ref}
            scale={props.scl}>
			{(props.shape === "Box") && <boxGeometry attach="geometry" args={props.arg} />}
			{(props.shape === "Cone") && <coneGeometry attach="geometry" args={props.arg} />}
			{(props.shape === "Octahedron") && <octahedronGeometry attach="geometry" args={props.arg} />}
            <meshNormalMaterial attach='material' />
        </mesh>
    )
}

function Eth(props) {
    const [active, setActive] = useState(false)
    const ref = useRef()
    useFrame(() => {
        if (active) {
            let date = Date.now() * 0.001;
            ref.current.rotation.set(
                Math.cos(date) + props.rotation[0],
                Math.sin(date) + props.rotation[1],
                props.rotation[2]
            )
        } else if (props.shape === "Cone") {
            ref.current.rotation.set(
                0.3,
                props.rotation[1],
                props.rotation[2]
            )
        } else {
            ref.current.rotation.set(
                props.rotation[0],
                props.rotation[1],
                props.rotation[2]
            )
        };
    });
    return (
        <PerspectiveCamera
            {...props}
            ref={ref}
            scale={1}
            onClick={(event) => setActive(!active)}>
			{(props.shape === "Box") && <Geometry position={[0, 0, 0]} rotation={[0, 0, 0]} arg={[1, 1, 1]} shape={props.shape} scl={2.5} />}
			{(props.shape === "Cone") && <Geometry position={[0, 1.15, 0]} rotation={[0, 0, 0]} arg={[1, 1.5, 3]} shape={props.shape} scl={1.5} />}
			{(props.shape === "Cone") && <Geometry position={[0, -0.825, 0]} rotation={[-3.15, 1.05, 0]} arg={[1, 1, 3]} shape={props.shape} scl={1.5} />}
			{(props.shape === "Octahedron") && <Geometry position={[0, 0, 0]} rotation={[0, 0, 0]} arg={[1, 0]} shape={props.shape} scl={2} />}
        </PerspectiveCamera>
    )
}

function Camera(props) {
    const [active, setActive] = useState(true)
    const ref = useRef()
    const [sizes, setSizes] = useState({
        width: 0,
        height: 0
    });
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const handleWindowMouseMove = event => {
        setCoords({
            x: event.screenX / sizes.width - 0.5,
            y: event.screenY / sizes.height - 0.5
        });
    };
    useFrame(() => {
        if (active) {
            setSizes({
                width: window.innerWidth,
                height: window.innerHeight
            });
            window.addEventListener('mousemove', handleWindowMouseMove);
            ref.current.rotation.set(
                coords.y * 2,
                coords.x * 2,
                0
            )
        } else {
            ref.current.rotation.set(
                0,
                0,
                0
            )
        };
    });
    return (
        <PerspectiveCamera
            {...props}
            ref={ref}
            onContextMenu={(event) => setActive(!active)}>
            <Eth position={[0, 0, 0]} rotation={[0, 0, 0]} shape={props.shape} />
        </PerspectiveCamera>
    )
}

export default function App(props) {
    return (
        <Canvas onContextMenu={(event) => event.preventDefault()}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Camera position={[0, 0, 0]} shape={props.shape} />
        </Canvas>
    )
}
