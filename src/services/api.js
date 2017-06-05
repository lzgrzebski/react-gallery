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
      // no results at all
      if (page === 0) {
        return { images: { [page]: {} }, lastPage: page, page };
      }
      // next page dont have any results, we will provide previous page and set as a last page
      return { lastPage: page - 1, page: page - 1 };
    }
    // page have less results than limit, so its a last page
    if (images.length < limit) {
      return { images: { [page]: normalize(images) }, lastPage: page, page };
    }
    // 'middle' page, still can fetch more images in the next page
    return { images: { [page]: normalize(images) }, page };
  } catch (e) {
    throw e;
  }
};
