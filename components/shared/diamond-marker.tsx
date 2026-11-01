
const sizes = {
  8: "size-2",
  12: "size-3",
  16: "size-4",
  20: "size-5",
} as const;

const colors = {
  signal: "bg-signal",
  forge: "bg-forge",
  graphite: "bg-graphite",
  offwhite: "bg-offwhite",
  slate: "bg-slate",
} as const;



type DiamondMarkerProps = {
  size: keyof typeof sizes;
  color: keyof typeof colors;
};

export function DiamondMarker({
  size = 8,
  color = "forge",
}: DiamondMarkerProps) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 rotate-45 rounded-xs ${sizes[size]} ${colors[color]}`}
    />
  );
}
