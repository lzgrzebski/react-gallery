/**
 * Generate image url, based on img id and size
 * @param {object} image
 * @param {object} size
 * @returns {string} image url
 */
export default (image, size) => `${image.url}${image.id}/${size.width}x${size.height}`;
