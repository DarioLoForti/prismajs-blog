const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createPost = (title, content, published, categoryId, tagIds) => {
    const slug = title.toLowerCase().split(' ').join('-');
    prisma.post.create({
        data: {
            title,
            slug,
            content,
            published,
            categoryId,
            tags: {
                connect: tagIds.map(tagId => ({ id: tagId }))
        }
    }
    }).then(post => {
        console.log(post);
    }).catch(error => {
        console.error(error);
    });
};

const getAllPosts = () => {
    prisma.post.findMany({
        include: {
            tags: true
        }
    }).then((posts) => {
        console.log(posts);
    }).catch((error) => {
        console.error(error);
    });
}

const getPostBySlug = (slug) => {
     prisma.post.findUnique({
        where: {
            slug: slug
        },
        include: {
            tags: true
        }
    }).then((post) => {
       console.log(post);
    }).catch((error) => {
        console.error(error);
    });
}

const updatePost = (id, data) => {
    if (data.title) {
        data.slug = data.title.toLowerCase().split(' ').join('-');
    }

    prisma.post.update({
        where: {
            id
        },
        data
        })
    .then((post) => {
        console.log(post);
    }).catch((error) => {
        console.error(error);
    });
};


const deletePost = (slug) => { 
    prisma.post.delete({
        where: {
            slug: slug
        }
    }).then((post) => {
        console.log(post);
    }).catch((error) => {
        console.error(error);
    });
}

const getPublishedPosts = () => {
    prisma.post.findMany({
        where: {
            published: true
        }
    }).then((posts) => {
        console.log(posts);
    }).catch((error) => {
        console.error(error);
    });
}

const getPostsByContent = (content) => {
    prisma.post.findMany({
        where: {
            content: {
                contains: content
            }
        }
    }).then((posts) => {
        console.log(posts);
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createPost,
    getAllPosts,
    getPostBySlug,
    updatePost,
    deletePost,
    getPublishedPosts,
    getPostsByContent
}