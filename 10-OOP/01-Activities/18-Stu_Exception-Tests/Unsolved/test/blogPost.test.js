const BlogPost = require('../blogPost.js');

describe('BlogPost', () => {
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided is less than 2 characters long.
  describe('Author Length', () => {
    it('should throw an error when the authorName length is less than 2', () => {
      const cb = () => new BlogPost('A');
      const err = new Error('Author must be at least 2 characters long.')

      expect(cb).toThrowError(err);
    })
  })
  // TODO: Write a test that verifies that BlogPost throws an error when the authorName provided does not only contain uppercase, lowercase, numbers, dashes, and underscores.

});


