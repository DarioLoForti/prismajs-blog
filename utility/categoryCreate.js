const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createCategory = (name) => {
    prisma.category.create({
        data: {
            name: name,
        }
    }).then((category) => {
        console.log(category);
    }).catch((error) => {
        console.error(error);
    });
}

module.exports = {
    createCategory
}