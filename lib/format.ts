export function formatPrice(value: number): string {
  return `${new Intl.NumberFormat('mn-MN').format(value)}₮`;
}

export function truncate(value: string, max = 96): string {
  if (value.length <= max) return value;
  return `${value.slice(0, max).trim()}…`;
}
