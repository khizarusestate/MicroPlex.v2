import { motion } from "framer-motion";

const particles = Array.from({ length: 70 });

export default function Particles() {
    const colors = [
        "#49D9E8",
        "#5A8EF6",
        "#D06AE8",
        "#ffffff"
    ];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {particles.map((_, i) => {

                const size = Math.random() * 3 + 1.5;

                return (
                    <motion.span
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: size,
                            height: size,
                            backgroundColor: colors[i % colors.length],
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            boxShadow: `
                                0 0 8px ${colors[i % colors.length]},
                                0 0 20px ${colors[i % colors.length]},
                                0 0 35px ${colors[i % colors.length]}
                            `,
                        }}
                        animate={{
                            y: [
                                0,
                                Math.random() * 40 - 20,
                                0
                            ],
                            x: [
                                0,
                                Math.random() * 30 - 15,
                                0
                            ],
                            opacity: [
                                0.3,
                                1,
                                0.3
                            ],
                            scale: [
                                0.8,
                                1.4,
                                0.8
                            ],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5,
                        }}
                    />
                );
            })}
        </div>
    );
}