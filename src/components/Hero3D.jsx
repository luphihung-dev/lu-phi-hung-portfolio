import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const stageLabels = ['Lead', 'Qualified', 'Proposal', 'Won'];

export default function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0.4, 8.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const root = new THREE.Group();
    scene.add(root);

    const ambient = new THREE.AmbientLight(0xe8f4ea, 1.3);
    scene.add(ambient);

    const key = new THREE.PointLight(0x9fc8dc, 58, 16);
    key.position.set(-4, 4, 5);
    scene.add(key);

    const fill = new THREE.PointLight(0xbdd4bf, 28, 14);
    fill.position.set(4, -2, 4);
    scene.add(fill);

    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0xb7d0bd,
      roughness: 0.42,
      metalness: 0.18,
      emissive: 0x12382a,
      emissiveIntensity: 0.12
    });
    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x75a7c7,
      roughness: 0.5,
      metalness: 0.08,
      emissive: 0x173649,
      emissiveIntensity: 0.11
    });
    const taskMaterial = new THREE.MeshStandardMaterial({
      color: 0xf3dfb5,
      roughness: 0.55,
      metalness: 0.05,
      emissive: 0x3b2d12,
      emissiveIntensity: 0.08
    });

    const sphere = new THREE.SphereGeometry(0.13, 24, 24);
    const box = new THREE.BoxGeometry(0.23, 0.23, 0.23);
    const nodes = [
      [-3.5, 1.3, -0.6, nodeMaterial],
      [-2.1, 0.4, 0.4, blueMaterial],
      [-1.1, 1.15, -0.3, taskMaterial],
      [0.2, 0.2, 0.55, nodeMaterial],
      [1.35, 1.05, -0.25, blueMaterial],
      [2.45, 0.2, 0.25, nodeMaterial],
      [3.35, 1.15, -0.7, taskMaterial],
      [-2.7, -1.1, -0.2, taskMaterial],
      [-0.7, -1.2, 0.35, nodeMaterial],
      [1.3, -0.95, -0.15, blueMaterial],
      [3.0, -1.15, 0.25, nodeMaterial]
    ].map(([x, y, z, material], index) => {
      const mesh = new THREE.Mesh(index % 4 === 2 ? box : sphere, material);
      mesh.position.set(x, y, z);
      mesh.userData.base = new THREE.Vector3(x, y, z);
      root.add(mesh);
      return mesh;
    });

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xb7d0bd,
      transparent: true,
      opacity: 0.34
    });
    const linePairs = [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [1, 7],
      [7, 8],
      [8, 9],
      [9, 10],
      [3, 8],
      [5, 10]
    ];
    const lines = linePairs.map(([a, b]) => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        nodes[a].position,
        nodes[b].position
      ]);
      const line = new THREE.Line(geometry, lineMaterial.clone());
      line.userData.pair = [a, b];
      root.add(line);
      return line;
    });

    const pipeline = new THREE.Group();
    stageLabels.forEach((_, index) => {
      const stage = new THREE.Mesh(
        new THREE.BoxGeometry(1.05, 0.12, 0.04),
        new THREE.MeshStandardMaterial({
          color: index === 3 ? 0x91b695 : 0x456f86,
          roughness: 0.6,
          metalness: 0.03,
          transparent: true,
          opacity: 0.78
        })
      );
      stage.position.set(-1.85 + index * 1.23, -2.05, 0);
      pipeline.add(stage);
    });
    root.add(pipeline);

    const particles = new THREE.Group();
    const dotGeometry = new THREE.SphereGeometry(0.035, 12, 12);
    for (let i = 0; i < 22; i += 1) {
      const dot = new THREE.Mesh(dotGeometry, i % 2 ? blueMaterial : nodeMaterial);
      dot.position.set(-4 + Math.random() * 8, -2 + Math.random() * 4.2, -1.4 + Math.random());
      dot.userData.speed = 0.12 + Math.random() * 0.18;
      dot.userData.offset = Math.random() * Math.PI * 2;
      particles.add(dot);
    }
    root.add(particles);

    const clock = new THREE.Clock();
    let animationFrame;

    function resize() {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
      const isMobile = clientWidth < 700;
      root.scale.setScalar(isMobile ? 0.78 : 1);
      root.position.set(isMobile ? 0.4 : 1.15, isMobile ? -0.1 : -0.05, 0);
    }

    function animate() {
      const elapsed = clock.getElapsedTime();
      root.rotation.y = Math.sin(elapsed * 0.16) * 0.09;
      root.rotation.x = Math.sin(elapsed * 0.12) * 0.025;

      nodes.forEach((node, index) => {
        const base = node.userData.base;
        node.position.y = base.y + Math.sin(elapsed * 0.75 + index) * 0.06;
        node.position.x = base.x + Math.cos(elapsed * 0.35 + index * 0.4) * 0.025;
        node.rotation.y += 0.004;
        node.rotation.x += 0.002;
      });

      lines.forEach((line, index) => {
        const [a, b] = line.userData.pair;
        line.geometry.setFromPoints([nodes[a].position, nodes[b].position]);
        line.material.opacity = 0.22 + Math.sin(elapsed * 0.8 + index) * 0.08;
      });

      particles.children.forEach((dot, index) => {
        dot.position.x += dot.userData.speed * 0.01;
        dot.position.y += Math.sin(elapsed + dot.userData.offset) * 0.0018;
        if (dot.position.x > 4.2) dot.position.x = -4.2;
        dot.material.emissiveIntensity = 0.05 + Math.sin(elapsed * 1.2 + index) * 0.03;
      });

      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    }

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', resize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      sphere.dispose();
      box.dispose();
      dotGeometry.dispose();
      lineMaterial.dispose();
      nodeMaterial.dispose();
      blueMaterial.dispose();
      taskMaterial.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />;
}
