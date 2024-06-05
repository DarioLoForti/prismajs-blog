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

updatePost(1, 
    {
        title: 'post 1',
        content: 'Prova 1',
        published: true,
        categoryId: 1,
        tags: {
            set: [
                { id: 1 },
                { id: 3 }
            ]
        }
    });