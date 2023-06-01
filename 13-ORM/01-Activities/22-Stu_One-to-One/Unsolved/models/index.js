const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // when we delete a reader, make sure to also delete the associated library card
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// package the two models and export them as an object so we can import them together and use thir proper names
module.exports = { Reader, LibraryCard };
