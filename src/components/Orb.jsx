/**
 * The ball itself sits just past the section edge (fully off-canvas) —
 * only the blurred box-shadow is meant to be visible. `offset` is how
 * far past the edge the ball's near side sits; keep it >= size so no
 * sliver of the ball itself ever shows.
 */
export default function Orb({
  side = "left",
  top = "20%",
  offset = 210,
  size = 200,
  fill = "rgba(90,142,246,0.2)",
  glow = "rgb(90,142,246)",
  spread = 900,
}) {
  const sidePos = side === "left" ? { left: -offset } : { right: -offset };

  return (
    <div
      aria-hidden="true"
      className="absolute rounded-full pointer-events-none"
      style={{
        top,
        ...sidePos,
        height: size,
        width: size,
        background: fill,
        boxShadow: `0 0 ${spread}px ${glow}`,
      }}
    />
  );
}
