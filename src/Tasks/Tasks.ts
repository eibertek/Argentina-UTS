import * as _ from 'lodash';
import * as moment from 'moment';

declare type TasksProps = {
    id: number;
    parentId: number;
    sprintId: Array<number>;
    name: string;
    description: string;
    estimated: moment.Moment;
    charge: number;
    status: string;
}

export class Tasks {

        private props: TasksProps;

        constructor(props:TasksProps){
            this.props = props;
        }

        public create = () => {

        }

        public set = () => {

        }

        public get = (value) => {
            return this.props[value];
        }
        public addTime = () => {

        }

        public changeStatus = () => {

        }

        public isFinished = () => {
                return moment.duration(this.props.estimated.diff(moment())).asHours();
        }

}

export default Tasks;