// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName,
        this.title = title,
        this.text = text,
        this.createdOn = createdOn
    }

        comments = [];

        printMeData() {
            console.log(`Created by ${this.authorName} on ${this.createdOn}`)
        }

        addComment(input) {
            this.comments.push(input);
        }
    
}
// TODO: Give BlogPost a property called 'comments' that is set to an empty array.

// TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
class Comment {
    constructor(authorName, text, createOn, reaction) {
        this.authorName = authorName,
        this.text = text,
        this.createOn = createOn,
        this.reaction = reaction
    }

    printMeData() {
        console.log(`Created by ${this.authorName} on ${this.createOn} ${this.reaction}`)
    }
}

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.

// TODO: Create a new object using the Comment class constructor.
const commentOne = new Comment('Brad', 'tallyho', '1/4/76', 'OMG')

// TODO: Create a new object using the BlogPost class constructor.
const blogOne = new BlogPost('Sarah', 'hobbit', 'oooh, my feet', '7/12/82')
// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
blogOne.addComment('WTF')
// TODO: Print the meta data for both the BlogPost and the Comment to the console.
commentOne.printMeData();
blogOne.printMeData();

console.log(blogOne.comments)
console.log(commentOne);
console.log(blogOne);
