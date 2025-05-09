export function renderStars(rating) {
  const rounded = Math.round(rating);
  const filled = "★".repeat(rounded);
  const empty = "☆".repeat(5 - rounded);
  return filled + empty;
}
