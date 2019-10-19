import Driver, { DataStruct } from "../driver";
import moment = require("moment");
import { TaskProps} from '../Tasks';

export declare type AlertProps = {
    id?: number;
    taskId: TaskProps['id'];
    alertTime: moment.Moment;
    name: string;
    description: string;
}

const dataStruct:DataStruct ={
    type: 'STORAGE',
    collectionName: 'Alerts',
    connectionString: '',
};

export class Alert extends Driver {

    private props:AlertProps;

    constructor(props:AlertProps){
        super(dataStruct);
        if(props.id) {
            this.load(props.id);
        }else{
            this.props = { id:Math.random()*1000000, ...props};
        }
    }

    private load = (id:number) => {
        this.props = <AlertProps>this.getData(id);
    }

    public save = () => {
        this.onSave(this.props);
    }

    public set = ([prop, value]) => {
        this.props[prop] = value;
    }

    public get = (value) => {
        return this.props[value];
    }

}