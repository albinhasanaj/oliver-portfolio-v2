import React, { useState, useEffect } from "react";

function FlareCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [glowSize, setGlowSize] = useState(20);

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });

        const target = e.target;
        if (target.classList.contains("HoverCursor")) {
            setGlowSize(40); // Larger glow size for flashlight effect
        } else {
            setGlowSize(20); // Default glow size
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            className="flare"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `5px`,
                height: `5px`,
                boxShadow: `0 0 ${glowSize}px ${glowSize}px rgba(255, 255, 255, 0.2)`
            }}
        ></div>
    );
}

export default FlareCursor;
