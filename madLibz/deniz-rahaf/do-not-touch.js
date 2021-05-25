/**
 * DO NOT TOUCH ANY OF THE CODE BELOW HERE.
 * 
 * Or you will be very sad.
 */
const getRawStory = () => {
  return fetch('./story.txt')
    .then(response => response.text());
};