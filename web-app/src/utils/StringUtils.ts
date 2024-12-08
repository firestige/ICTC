export function camelCase(s: string | undefined) {
  if (!s) {
    return '';
  }
  if (s.length < 1) {
    return s;
  }
  if (s.length > 1) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  return s.toUpperCase();
}
