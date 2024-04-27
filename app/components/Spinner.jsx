import { motion } from "framer-motion";
import { Jersey_15 } from "next/font/google";

const silkscreen = Jersey_15({ subsets: ["latin"], weight: "400" });

export default function Spinner({ text, radius, fontSize, letterSpacing }) {
  const characters = text.split("");

  return (
    <motion.div className="circle" style={{ width: radius * 2 }}>
      <p aria-label={text} />
      <p aria-hidden="true" className="text">
        {characters.map((ch, i) => (
          <motion.span
            key={i}
            className={`letter ${silkscreen.className} letter-${i}`}
            style={{
              transformOrigin: `0 ${radius}px`,
              transform: `rotate(${i * letterSpacing}deg)`,
              fontSize,
            }}
          >
            {ch}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
