import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Points, PointMaterial } from '@react-three/drei';
import { useMemo, useRef } from 'react';

function FlowField({ isDark }) {
  const groupRef = useRef();

  const nodePositions = useMemo(() => {
    const count = 180;
    const data = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const i3 = i * 3;
      data[i3] = (Math.random() - 0.5) * 10;
      data[i3 + 1] = (Math.random() - 0.5) * 5;
      data[i3 + 2] = (Math.random() - 0.5) * 4;
    }

    return data;
  }, []);

  const pipelines = useMemo(() => {
    return [
      [
        [-4.5, 1.2, 0],
        [-2.6, 0.2, 0.6],
        [-1.1, 0.8, -0.4],
        [0.2, -0.2, 0.8],
        [1.8, 0.9, 0.3],
        [4.2, 0.5, 0],
      ],
      [
        [-4.2, -1.5, 0.6],
        [-2.3, -0.8, -0.2],
        [-0.8, -1.2, 0.5],
        [1.2, -0.4, 0.1],
        [2.8, -1.1, -0.5],
        [4.5, -0.6, 0.2],
      ],
      [
        [-3.5, 2.3, -0.5],
        [-1.6, 1.5, 0.7],
        [0.2, 1.9, 0.2],
        [1.8, 1.2, 0.6],
        [3.4, 1.8, -0.1],
      ],
    ];
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.08;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.25;
  });

  return (
    <group ref={groupRef}>
      {pipelines.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={isDark ? '#7dd3fc' : '#60a5fa'}
          lineWidth={0.8}
          transparent
          opacity={0.28}
          dashed={false}
        />
      ))}

      <Points positions={nodePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          size={0.06}
          sizeAttenuation
          color={isDark ? '#e2e8f0' : '#1d4ed8'}
          opacity={0.55}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function DataFlow({ isDark = true }) {
  return null;
}
