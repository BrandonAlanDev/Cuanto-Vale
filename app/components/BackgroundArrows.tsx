import React, { useRef, useEffect } from "react";

interface Arrow {
  x: number;
  y: number;
  size: number;
  direction: number;
  speed: number;
  opacity: number;
  fade: number;
  horizontalSpeed: number;
}

const BackgroundArrows: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arrows = useRef<Arrow[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const createArrow = () => {
      const direction = Math.random() > 0.5 ? 1 : -1;
      const yStart = direction === 1 ? canvas.height + 10 : -10;

      arrows.current.push({
        x: Math.random() * canvas.width,
        y: yStart,
        size: 10 + Math.random() * 10,
        direction,
        speed: 0.2 + Math.random() * 0.4,
        opacity: 1,
        fade: 0.0003 + Math.random() * 0.0002,
        horizontalSpeed: (Math.random() - 0.5) * 0.2,
      });
    };

    const drawArrow = (a: Arrow) => {
      ctx.save();
      ctx.translate(a.x, a.y);
      ctx.globalAlpha = a.opacity;
      ctx.rotate(a.direction === 1 ? 0 : Math.PI);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(-a.size / 2, a.size);
      ctx.lineTo(a.size / 2, a.size);
      ctx.closePath();
      ctx.fillStyle = a.direction === 1 ? "#22c55e" : "#ef4444";
      ctx.fill();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (Math.random() < 0.04) createArrow();

      // Actualizamos todas las flechas
      const nextArrows: Arrow[] = [];

      for (const a of arrows.current) {
        a.y += a.direction === 1 ? -a.speed : a.speed;
        a.x += a.horizontalSpeed;
        a.opacity -= a.fade;

        // solo mantenemos las que siguen visibles
        if (
          a.opacity > 0 &&
          a.y > -50 &&
          a.y < canvas.height + 50 &&
          a.x > -50 &&
          a.x < canvas.width + 50
        ) {
          drawArrow(a);
          nextArrows.push(a);
        }
      }

      arrows.current = nextArrows;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default BackgroundArrows;
