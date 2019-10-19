import * as _ from 'lodash';
import * as moment from 'moment';
import Driver, { DataStruct } from '../driver';

declare type Status = 'NEW' | 'IN PROGRESS' | 'QA' | 'FINISH' | 'FIXED';

export declare type TaskProps = {
    id?: number;
    parentId: number;
    sprintId: Array<number>;
    name: string;
    description: string;
    estimated: moment.Moment;
    charge: number;
    status: Status;
}

const dataStruct:DataStruct ={
    type: 'STORAGE',
    collectionName: 'Tasks',
    connectionString: '',
};

export class Task extends Driver {

        private props: TaskProps;

        constructor(props:TaskProps){            
            super(dataStruct);
            if(props.id) {
                this.props = this.load(props);
            }else{
                this.props = { id:Math.random()*1000000, ...props};
            }
        }

        public static getAll = () => {
            return Task.getCollection(dataStruct).map((el:TaskProps) => new Task(el));

        }

        private load = (props: TaskProps) => {
            const loadedProps = <TaskProps>this.getData(props.id);
            if(!loadedProps) {
                this.loadedItem = false;
                return props;
            }
            this.loadedItem = true;
            loadedProps.estimated = moment(loadedProps.estimated);
            return loadedProps;
        }

        public isLoaded = () => this.loadedItem;

        public save = () => {
            this.onSave(this.props);
            this.loadedItem = true;
        }

        public set = ([prop, value]) => {
            this.props[prop] = value;
        }

        public get = (value=null) => {
            return value ? this.props[value] : this.props;
        }
        
        public delete = () => {
            this.onDelete(this.props);
        }

        public changeTime = ({amount, time='hours'}) => {
            if(amount > 0) {
                this.props.estimated.add(amount, time);
            }else{
                this.props.estimated.subtract(amount, time);
            }
        }

        private validateStatus = (status: Status) => {
            const oldStatus = this.props.status;
            switch (status) {
                case 'FIXED':
                    if(oldStatus !== 'QA' && oldStatus !== 'NEW' )
                        throw "You cant change to FIXED if not NEW or QA";
                    break;                                    
                case 'QA':
                    if(oldStatus !== 'IN PROGRESS')
                        throw "You cant change to QA if old status is not IN PROGRESS";
                    break;                                        
                default:
                    break;
            }
        }   

        public changeStatus = (status: Status) => {
            try{
                this.validateStatus(status);
            }catch(e){
                return e;
            }
            this.props.status = status;
            return;
        }

        public isFinished = () => {
                return moment.duration(this.props.estimated.diff(moment())).asHours();
        }

}
