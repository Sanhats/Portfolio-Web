import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Environment, Float, Stars } from '@react-three/drei'

function FloatingShape() {
  const meshRef = useRef()
  
  useFrame(({ mouse, viewport }) => {
    if (!meshRef.current) return
    const x = (mouse.x * viewport.width) / 2
    const y = (mouse.y * viewport.height) / 2
    meshRef.current.lookAt(new Vector3(x, y, 0))
    meshRef.current.position.x = x * 0.1
    meshRef.current.position.y = y * 0.1
  })

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color="#f472b6" wireframe />
      </mesh>
    </Float>
  )
}

export function Background3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={2} />
        <FloatingShape />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}

