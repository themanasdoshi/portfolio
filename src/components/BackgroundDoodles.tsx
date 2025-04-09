'use client';
import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size?: number;
}

const BackgroundDoodles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  const initParticles = (width: number, height: number) => {
    // Network particles
    const particleCount = 100;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      });
    }
    particlesRef.current = newParticles;
  };

  const drawParticles = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height);
    
    // Draw network
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
    ctx.lineWidth = 0.3;

    const particles = particlesRef.current;
    particles.forEach((particle, i) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      particle.x = Math.max(0, Math.min(width, particle.x));
      particle.y = Math.max(0, Math.min(height, particle.y));

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
      ctx.fill();

      const connectionRadius = 120;
      particles.slice(i + 1).forEach((otherParticle) => {
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionRadius) {
          const opacity = (1 - distance / connectionRadius) * 0.2;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      });

      const mouseDistance = Math.sqrt(
        Math.pow(particle.x - mousePosition.x, 2) +
        Math.pow(particle.y - mousePosition.y, 2)
      );

      if (mouseDistance < connectionRadius * 1.5) {
        const opacity = (1 - mouseDistance / (connectionRadius * 1.5)) * 0.3;
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(mousePosition.x, mousePosition.y);
        ctx.stroke();
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (currentTime - lastTime > 16) {
        drawParticles(ctx, canvas.width, canvas.height);
        lastTime = currentTime;
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate(0);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      <div className="absolute inset-0 bg-[#0B1121] -z-10" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 -z-10"
      />
    </div>
  );
};

export default BackgroundDoodles; 