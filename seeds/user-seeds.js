
const {User} = require('../models');

const userData = [
    {
        username: 'surveillancevan20',
        email: 'normalperson@FBI.gov',
        password:'atotallynormalperson'
    },
    {
        username: 'trojanlauncher.exe',
        email: 'clickme@virus.com',
        password:'notavirus'
    },
    {
        username: 'nothacking',
        email: 'nothacker@hacker.com',
        password:'nothackingyou'
    },
    {
        username: 'notAVirus',
        email: 'virus@sketchySite.com',
        password:'totallynotavirus'
    },
    {
        username: 'slothLuvr292',
        email: 'joe@gmail.com',
        password:'slothsRlife'
    },
    {
        username: 'beesAreBetter',
        email: 'notABee@bee.com',
        password:'totallynotabeeinatrenchcoat'
    }
    
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;