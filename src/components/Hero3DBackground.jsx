import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const isMobileOrTouch = () =>
  typeof window !== 'undefined' &&
  (navigator.maxTouchPoints > 0 || window.innerWidth < 768);

function FloatingShape({ geometry, position, color, speed = 0.3, mouse }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 0.6;
    const t = state.clock.elapsedTime;
    ref.current.position.y = position[1] + Math.sin(t * 0.6 + position[0]) * 0.25;
    // mouse parallax (very subtle)
    ref.current.position.x = position[0] + mouse.current.x * 0.4;
    ref.current.position.z = position[2] + mouse.current.y * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      {geometry}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function Scene() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <>
      <ambientLight intensity={0.3} />
      <FloatingShape
        geometry={<icosahedronGeometry args={[1.2, 1]} />}
        position={[-2.8, 0.6, 0]}
        color="#a78bfa"
        speed={0.25}
        mouse={mouse}
      />
      <FloatingShape
        geometry={<torusGeometry args={[1, 0.3, 12, 48]} />}
        position={[2.6, -0.4, -1]}
        color="#38bdf8"
        speed={0.35}
        mouse={mouse}
      />
      <FloatingShape
        geometry={<sphereGeometry args={[0.8, 18, 18]} />}
        position={[0.5, 1.8, -2]}
        color="#f472b6"
        speed={0.2}
        mouse={mouse}
      />
      <FloatingShape
        geometry={<octahedronGeometry args={[0.7, 0]} />}
        position={[-1.2, -1.6, -1.5]}
        color="#a78bfa"
        speed={0.4}
        mouse={mouse}
      />
    </>
  );
}

const Hero3DBackground = () => {
  const wrapRef = useRef(null);
  const [active, setActive] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    if (mq.matches || isMobileOrTouch()) return;

    const obs = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.05 }
    );
    if (wrapRef.current) obs.observe(wrapRef.current);
    return () => obs.disconnect();
  }, []);

  if (reduced || isMobileOrTouch()) {
    return <div ref={wrapRef} className="absolute inset-0" aria-hidden="true" />;
  }

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 pointer-events-none"
      style={{ willChange: 'transform' }}
      aria-hidden="true"
    >
      {active && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default Hero3DBackground;
