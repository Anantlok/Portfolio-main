import React from 'react';

const FallingLeaves = () => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // --- For a crisp pixelated look ---
    ctx.imageSmoothingEnabled = false;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 200; 

    function createParticle() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height, 
        size: Math.random() * 70 + 30, 
        speed: Math.random() * 1 + 0.5,
        sway: Math.random() * 0.5 - 0.25,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayTime: Math.random() * 100,
      };
    }

    function init() {
      for (let i = 0; i < numParticles; i++) {
        particles.push(createParticle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        // Update position
        p.y += p.speed;
        p.x += Math.sin(p.swayTime) * p.sway;
        p.swayTime += p.swaySpeed;

        if (p.y > canvas.height) {
          p.y = -p.size;
          p.x = Math.random() * canvas.width;
        }

        // --- Draw the pixelated dot (a square) ---
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent black
        ctx.fillRect(Math.floor(p.x), Math.floor(p.y), Math.ceil(p.size), Math.ceil(p.size));
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false; // Re-apply on resize
      particles.length = 0;
      init();
    };

    window.addEventListener('resize', handleResize);
    
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} id="leaves-canvas" />;
};

export default FallingLeaves;

