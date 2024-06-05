const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createTag = (name) => {
    prisma.tag.create({
        data: {
            name: name,
        }
    }).then((tag) => {
        console.log(tag);
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createTag
};
