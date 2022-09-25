//Class====================================================================================================

class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeCpmments(first, second) {
        return `${first} ${second}`
    }
}

console.log(Comment.mergeCpmments('First.', 'Second.'))

const newComment = new Comment('Comment')


newComment.upvote()
console.log(newComment)
newComment.upvote()
console.log(newComment)
newComment.upvote()
console.log(newComment)
newComment.upvote()
console.log(newComment)
newComment.upvote()
console.log(newComment)

console.log(newComment.hasOwnProperty('text'))
console.log(newComment.hasOwnProperty('votesQty'))
console.log(newComment.hasOwnProperty('upvote'))
console.log(newComment.hasOwnProperty(''))

//====================================================================================================