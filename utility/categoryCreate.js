const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


const createCategory = (name) => { 
    return prisma.category.create({
        data: {
            name: name,
        }
    });

}

model.exports = {
    createCategory
}
