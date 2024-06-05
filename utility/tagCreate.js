const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createTag = (name) => {
    return prisma.tag.create({
        data: {
            name: name,
        }
    });
}

model.exports = {
    createTag
}
