import * as moment from 'moment';
import Character from './character';
import Task, { TaskProps } from './Tasks';

const options = {
    name: 'Danny',
    lastname: 'Rand',
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
//const storage = localStorage.getItem('tasks');
//const character = new Character(options);
const newTaskProps: TaskProps = {
    //   id: 863444.5801060748,
    id: 911872.0679615744,
    parentId: 0,
    sprintId: [],
    name: '',
    description: 'this task is old',
    estimated: moment(),
    charge: 0,
    status: 'NEW',
};
const tasks = new Task(newTaskProps);
const debugElement:HTMLElement = document.getElementById('debug');
const datatable:HTMLElement = document.getElementById('datatable');
const allData = Task.getAll();
datatable.innerHTML = datatable.innerHTML + allData.map(element => {
    return `
        <tr>
        <td></td>
        <td>${element.get('id')}</td>
        <td>${element.get('name')}</td>
        <td>${element.get('description')}</td>
        <td>${element.isFinished()}</td>
    </tr>`;    
}).join('');
// tasks.set(['name', 'Maria Carey']);
// tasks.set(['description', 'Task Old']);
// tasks.changeTime({ amount:2 });
// const changeStatus = tasks.changeStatus('FIXED');
// tasks.save();
debugElement.innerHTML = ` 
    ${tasks.get('estimated').format('D-M-Y H:m')} <br />
    <pre style="width:300px">${JSON.stringify(tasks.get())}</pre> <br />
    ${localStorage.getItem('Tasks').length}
`;