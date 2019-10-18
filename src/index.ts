import * as moment from 'moment';
import Character from './character';
import Task from './Tasks/Tasks';

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
const tasks = new Task({
 //   id: 100,
    parentId: 0,
    sprintId: [],
    name: '',
    description: '',
    estimated: moment(),
    charge: 0,
    status: 'NEW',
});
console.log(tasks.isFinished()>0);

tasks.set(['name', 'Mariano']);
tasks.changeTime({ amount:2 });
console.log(tasks.changeStatus('FIXED'));
console.log(tasks.get('estimated').format('D-M-Y H:m'), moment());