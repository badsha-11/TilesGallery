"use client";

export default function SquareRings() {
  const rings = [
    { size: 120,  duration: 12, color: "rgba(6, 182, 212, 0.55)",  reverse: false },
    { size: 240,  duration: 18, color: "rgba(59, 130, 246, 0.40)", reverse: true  },
    { size: 380,  duration: 26, color: "rgba(129, 140, 248, 0.28)",reverse: false },
    { size: 540,  duration: 36, color: "rgba(6, 182, 212, 0.18)",  reverse: true  },
    { size: 720,  duration: 48, color: "rgba(59, 130, 246, 0.12)", reverse: false },
    { size: 940,  duration: 65, color: "rgba(129, 140, 248, 0.08)",reverse: true  },
  ];

  return (
    <>
      <style>{`
        @keyframes spinSq {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {rings.map((r, i) => (
        <div
          key={i}
          aria-hidden="true"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            width: r.size,
            height: r.size,
            marginTop: -(r.size / 2),
            marginLeft: -(r.size / 2),
            border: `1px solid ${r.color}`,
            borderRadius: "10px",
            pointerEvents: "none",
            zIndex: 0,
            animation: `spinSq ${r.duration}s linear infinite ${r.reverse ? "reverse" : "normal"}`,
          }}
        />
      ))}
    </>
  );
}