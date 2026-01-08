import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Generate random positions for particles
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 10,
  }));

  const geometricShapes = [
    { id: 1, type: "circle", x: 10, y: 20, size: 60, delay: 0 },
    { id: 2, type: "square", x: 80, y: 30, size: 40, delay: 2 },
    { id: 3, type: "triangle", x: 60, y: 70, size: 50, delay: 4 },
    { id: 4, type: "circle", x: 20, y: 80, size: 45, delay: 6 },
    { id: 5, type: "square", x: 90, y: 60, size: 35, delay: 8 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-purple-300/40 to-blue-300/40 shadow-lg"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6 + Math.random() * 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric Shapes */}
      {geometricShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-20"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: shape.delay,
            ease: "linear",
          }}
        >
          {shape.type === "circle" && (
            <div
              className="rounded-full bg-gradient-to-r from-cyan-300 to-purple-300 shadow-xl"
              style={{
                width: shape.size,
                height: shape.size,
              }}
            />
          )}
          {shape.type === "square" && (
            <div
              className="bg-gradient-to-r from-pink-300 to-orange-300 shadow-xl rounded-lg"
              style={{
                width: shape.size,
                height: shape.size,
              }}
            />
          )}
          {shape.type === "triangle" && (
            <div
              className="w-0 h-0 border-l-transparent border-r-transparent border-b-gradient-to-r from-green-300 to-blue-300 shadow-lg"
              style={{
                borderBottomWidth: shape.size * 0.866,
                borderLeftWidth: shape.size / 2,
                borderRightWidth: shape.size / 2,
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/10 to-blue-900/10" />
    </div>
  );
};

export default AnimatedBackground;
