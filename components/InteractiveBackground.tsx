
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const scrollY = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Main 3D Object: Icosahedron Wireframe
    // Increased detail (subdivisions) for a more complex "designer" look
    const geometry = new THREE.IcosahedronGeometry(2, 2); 
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x000000, 
      wireframe: true, 
      transparent: true, 
      opacity: 0.12 // Increased from 0.05 for better visibility
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Floating Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 400; // Increased count for better density
    const posArray = new Float32Array(particlesCount * 3);
    const initialPositions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      const val = (Math.random() - 0.5) * 12;
      posArray[i] = val;
      initialPositions[i] = val;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02, // Increased size for visibility
      color: 0x000000,
      transparent: true,
      opacity: 0.4, // Increased opacity
      sizeAttenuation: true
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    // Event Handlers
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Animation variables
    let time = 0;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Rotation based on scroll (dynamic & responsive)
      const scrollRotation = scrollY.current * 0.0015;
      sphere.rotation.y = scrollRotation * 0.6;
      sphere.rotation.x = scrollRotation * 0.3;

      // Mouse Parallax for the main object
      const targetX = mouse.current.x * 0.4;
      const targetY = mouse.current.y * 0.4;
      sphere.position.x += (targetX - sphere.position.x) * 0.05;
      sphere.position.y += (targetY - sphere.position.y) * 0.05;

      // Update particle positions for dynamic "floating" effect
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // Subtle wave motion
        positions[i3 + 1] = initialPositions[i3 + 1] + Math.sin(time + initialPositions[i3]) * 0.2;
        positions[i3] = initialPositions[i3] + Math.cos(time + initialPositions[i3 + 1]) * 0.1;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Global particle rotation
      particlesMesh.rotation.y += 0.0008;
      // Scroll influence on particles height
      particlesMesh.position.y = -scrollY.current * 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div ref={mountRef} className="w-full h-full" />
      {/* Subtle overlay to soften the 3D depth */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default InteractiveBackground;
