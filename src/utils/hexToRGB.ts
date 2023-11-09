const HEX_REGEXP = /^#[0-9A-F]{6}$/i;

const hexToRGB = (hex: string, alpha: number | undefined = undefined): string | null => {
  if (!hex || !HEX_REGEXP.test(hex) || (typeof alpha === 'number' && (alpha < 0 || alpha > 1))) {
    return null;
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (typeof alpha === 'number' && alpha >= 0 && alpha <= 1) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export default hexToRGB;
