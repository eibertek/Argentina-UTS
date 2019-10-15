import Character from './character';

const options = {
    name: 'Mariano',
    lastname: 'Eiberman',
    age: 34,
    degree: 'Lawyer',
    party: 'UC',
    stats: {
        honesty:20,
        loyalty:30,
        culture:30,
        intelligence:30,
        publicRelations: 30
    },
}
const character = new Character(options);
console.log(character);