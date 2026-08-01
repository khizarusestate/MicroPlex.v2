/**
 * The ball itself sits just past the section edge (fully off-canvas) —
 * only the blurred box-shadow is meant to be visible. `offset` is how
 * far past the edge the ball's near side sits; keep it >= size so no
 * sliver of the ball itself ever shows.
 *
 * Color continuously cycles purple -> blue -> teal -> purple via the
 * `.orb-animate` class (index.css) instead of a fixed color — `delay`
 * offsets where in that cycle this particular orb starts, so multiple
 * orbs on the same page don't pulse in lockstep.
 */
export default function Orb({
  side = "left",
  top = "20%",
  offset = 210,
  size = 200,
  spread = 900,
  delay = 0,
}) {
  const sidePos = side === "left" ? { left: -offset } : { right: -offset };

  return (
    <div
      aria-hidden="true"
      className="absolute rounded-full pointer-events-none orb-animate"
      style={{
        top,
        ...sidePos,
        height: size,
        width: size,
        animationDelay: `${delay}s`,
        "--spread": `${spread}px`,
      }}
    />
  );
}
