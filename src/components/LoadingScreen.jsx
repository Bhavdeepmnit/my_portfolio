import React, { useState, useEffect, useRef } from 'react';

const LoadingScreen = ({ onComplete }) => {
    const [percent, setPercent] = useState(0);
    const [isWarping, setIsWarping] = useState(false);

    const canvasRef = useRef(null);
    const rafRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let stars = [];
        const starCount = 400;

        class Star {
            constructor() {
                this.x = Math.random() * width - width / 2;
                this.y = Math.random() * height - height / 2;
                this.z = Math.random() * width;
                this.pz = this.z;
            }

            update(speed) {
                this.z = this.z - speed;
                if (this.z < 1) {
                    this.z = width;
                    this.x = Math.random() * width - width / 2;
                    this.y = Math.random() * height - height / 2;
                    this.pz = this.z;
                }
            }

            show(speed) {
                let sx = (this.x / this.z) * width;
                let sy = (this.y / this.z) * height;

                // Previous position for streak effect
                let px = (this.x / this.pz) * width;
                let py = (this.y / this.pz) * height;

                this.pz = this.z;

                // Drawing relative to center
                ctx.save();
                ctx.translate(width / 2, height / 2);

                let r = (width - this.z) / width; // size factor
                let size = (1 - this.z / width) * 4;

                // Color shift based on speed
                let hue = speed > 20 ? 250 : 200; // Blue -> Purple
                let saturation = speed > 30 ? 100 : 0;
                ctx.strokeStyle = `hsla(${hue}, ${saturation}%, 100%, 0.8)`;
                ctx.lineWidth = size;

                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(px, py);
                ctx.stroke();

                ctx.restore();
            }
        }

        // Init Stars
        for (let i = 0; i < starCount; i++) {
            stars.push(new Star());
        }

        let progress = 0;
        let speed = 2;

        const animate = () => {
            // Clear with trails
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < stars.length; i++) {
                stars[i].update(speed);
                stars[i].show(speed);
            }

            if (progress < 100) {
                progress += 0.5;
                setPercent(Math.floor(progress));

                // Accelerate
                speed = 2 + (progress * 0.5);

            } else {
                // WARP SPEED
                if (!isWarping) {
                    setIsWarping(true); // Signal React
                }
                speed += 5; // Infinite acceleration
                if (speed > 100) {
                    // Transition helper handled by React state
                }
            }

            rafRef.current = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(rafRef.current);
        };
    }, []); // Run once

    useEffect(() => {
        if (isWarping) {
            // Trigger exit sequence
            setTimeout(() => {
                onComplete();
            }, 800); // 800ms of pure warp speed before cut
        }
    }, [isWarping, onComplete]);

    return (
        <div className={`fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center transition-opacity duration-200 ${isWarping ? 'opacity-0 scale-150' : 'opacity-100'}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* Multiverse HUD */}
            <div className={`relative z-10 flex flex-col items-center transition-all duration-300 ${isWarping ? 'scale-[5] opacity-0 blur-sm' : 'scale-100 opacity-100'}`}>
                <div className="text-8xl md:text-9xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-b from-cyan-300 via-blue-500 to-purple-600 animate-pulse tracking-tighter filter drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                    {percent}%
                </div>
                <div className="text-cyan-400 font-mono text-sm tracking-[0.5em] uppercase">
                    Initiating Warp
                </div>
            </div>

            {/* Flash Overlay */}
            <div className={`absolute inset-0 bg-white pointer-events-none transition-opacity duration-500 ease-out ${isWarping ? 'opacity-100' : 'opacity-0'}`}></div>
        </div>
    );
};

export default LoadingScreen;
