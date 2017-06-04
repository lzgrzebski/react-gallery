import 'whatwg-fetch'; // fetch polyfill
import constants from '../constants';

/**
 * Normalize data from json
 * @param {array} images
 * @returns {object} {[id]: {imgObj}}
 */
const normalize = images => images.reduce((acc, image) => ({ ...acc, [image.id]: image }), {});

/**
 * Async call to the API to get json with images data
 * @param {int} page next page that can be loaded
 * @param {int} [limit=constants.imageLimit]
 * @returns {object} { ?images ?page ?lastPage }
 */
export default async (page, limit = constants.imageLimit) => {
  try {
    const { images } = await (await fetch(`/gallery?start=${page * limit}&count=${limit}`)).json();
    if (images.length === 0) {
      return { lastPage: page - 1, page: page - 1 };
    }
    if (images.length < limit) {
      return { images: { [page]: normalize(images) }, lastPage: page, page };
    }
    return { images: { [page]: normalize(images) }, page };
  } catch (e) {
    throw e;
  }
};
