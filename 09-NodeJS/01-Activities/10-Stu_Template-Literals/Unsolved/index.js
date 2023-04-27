// music should be an object with title, artist, and album properties
const music = {
  // code here
  band: "thoseGuys",
  genre: "polka",
  albums: "Let's get polka'd"
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `The band, ${music.band}, play great ${music.genre} music.  They have an album called "${music.albums}".`;

console.log(songSnippet)

