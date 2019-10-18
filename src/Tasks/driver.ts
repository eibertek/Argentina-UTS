declare type ID = string | number;

export default abstract class Driver {


    constructor(){}

    protected init = (dataStruct) => {
        console.log('init data');
    } 

    protected onSave = () => {
        console.log('save data');
    }

    protected getData = (id:ID) => {
        console.log('save data');
        return {};
    }    
}