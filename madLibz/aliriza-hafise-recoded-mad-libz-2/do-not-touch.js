const getRawStory = () => {
  return fetch('./story.txt')
    .then(response => response.text());
};
