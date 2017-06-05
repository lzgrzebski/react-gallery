/**
 * Calculate padding to keep ratio when resizing
 * https://css-tricks.com/snippets/sass/maintain-aspect-ratio-mixin/
 * @param {object} size
 * @returns {int} padding value
 */
export default (size) => {
  const { width, height } = size;
  const ratio = width / height;
  return (100 / ratio).toFixed(2);
};
