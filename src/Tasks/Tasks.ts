import * as _ from 'lodash';
import * as moment from 'moment';
import Driver from './driver';

declare type Status = 'NEW' | 'IN PROGRESS' | 'QA' | 'FINISH' | 'FIXED';

declare type TasksProps = {
    id?: number;
    parentId: number;
    sprintId: Array<number>;
    name: string;
    description: string;
    estimated: moment.Moment;
    charge: number;
    status: Status;
}

export class Tasks extends Driver {

        private props: TasksProps;
        private readonly dataStruct = {};

        constructor(props:TasksProps){
            super();
            this.init(this.dataStruct);
            if(props.id) {
                this.load(props.id);
            }else{
                this.props = props;
            }
        }

        private load = (id:number) => {
            this.props = <TasksProps>this.getData(id);
        }

        public save = () => {
            this.onSave();
        }

        public set = ([prop, value]) => {
            this.props[prop] = value;
        }

        public get = (value) => {
            return this.props[value];
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
            console.log(oldStatus, status);
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
        }

        public isFinished = () => {
                return moment.duration(this.props.estimated.diff(moment())).asHours();
        }

}

export default Tasks;