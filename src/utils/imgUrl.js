/**
 * Generate image url, based on img id and size
 * @param {any} image
 * @param {string}
 */
export default (image, size) => `${image.url}${image.id}/${size.width}x${size.height}`;
