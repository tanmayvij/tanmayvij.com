interface PhotoPlaceholderProps {
  shape?: "portrait" | "square" | "circle";
  label?: string;
}

/** Striped placeholder standing in for a real photo — swap in an image later. */
export function PhotoPlaceholder({
  shape = "portrait",
  label = "professional photo",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`photo photo-${shape}`}
      role="img"
      aria-label={`${label} (placeholder)`}
    >
      <div className="photo-stripes" aria-hidden="true" />
      <span className="photo-label">{label}</span>
    </div>
  );
}
