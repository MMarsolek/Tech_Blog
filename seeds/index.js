const userSeed = require('./user-seeds');
const commentSeed = require('./comment-seed');
const postSeed = require('./post-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
      
    await userSeed();
    console.log('\n----- USER SEEDED -----\n');

    console.log('\n----- DATABASE SYNCED -----\n');
    await postSeed();
    console.log('\n----- POST SEEDED -----\n');
  
    await commentSeed();
    console.log('\n----- COMMENT SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();