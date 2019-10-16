import * as moment from 'moment';
import Character from './character';
import Tasks from './Tasks/Tasks';

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
console.log(moment());
const tasks = new Tasks({
    id: 100,
    parentId: 0,
    sprintId: [],
    name: '',
    description: '',
    estimated: moment().add(2, 'days'),
    charge: 0,
    status: 'new',
});
console.log(tasks.get('estimated'), tasks.isFinished());