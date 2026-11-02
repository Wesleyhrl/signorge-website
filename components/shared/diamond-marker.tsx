const colors = {
  signal: "bg-signal",
  forge: "bg-forge",
  graphite: "bg-graphite",
  offwhite: "bg-offwhite",
  slate: "bg-slate",
} as const;

type DiamondMarkerProps = {
  color: keyof typeof colors;
  className?: string;
};

export function DiamondMarker({
  color = "forge",
  className = "size-2",
}: DiamondMarkerProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rotate-45 rounded-xs ${colors[color]} ${className}`}
    />
  );
}
