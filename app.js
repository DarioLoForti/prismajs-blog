const { createCategory } = require('./utility/categoryCreate.js');

const {
    createTag
} = require('./utility/tagCreate.js');

const {
    createPost,
    getAllPosts,
    getPostBySlug,
    updatePost,
    deletePost,
    getPublishedPosts,
    getPostsByContent
} = require('./utility/postCrud.js');


// createPost('Post 2', 'This is the second post', true, 1, [1, 3]);