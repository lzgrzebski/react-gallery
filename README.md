# react gallery with node api
Idea is pretty simple, get json with all images, and display as a grid + user is able to see
full image by clicking in the particular thumb, then full image is displayed in the modal in the
another layer.

* Node API simulate server under load with random 500 erros, in the react app this is covered
and user can reload images which are not loaded for the first time (added fallback placeholder)

* Node API provide as well pagination two variables need to be added to the url "start" and "count" - limit.

**TODO**
* add Promise polyfill, because its not working in IE 11
* loader in the image modal
* add information when user reached end that we dont have any more images

## [Demo](http://)

