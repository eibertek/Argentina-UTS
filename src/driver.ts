import { Props } from './types';
export const STORAGE: string = 'STORAGE';
export const SQL: string = 'SQL';
export const GRAPHQL: string = 'GRAPHQL';
export declare type ID = string | number;

export interface DataStruct {
    type: typeof SQL | typeof GRAPHQL | typeof STORAGE;
    collectionName: string;
    connectionString: string;
};

export default abstract class Driver {

    protected dataStruct: DataStruct;
    private connector: DriverConnector;
    private debugMode: boolean = true;
    protected loadedItem: boolean = false;

    constructor(dataStruct){
        this.dataStruct = dataStruct;
        this.init();
    }

    protected init = () => {
        this.connector = new DriverConnector(this.dataStruct.type, this.dataStruct.collectionName );
        if(this.debugMode) console.log('init data');
    } 

    protected onSave = (data: Props) => {
        let collection = this.connector.getCollection();
        if(!this.loadedItem){
            collection.push(data);        
        }else{
            collection = [...collection.filter(item => item.id !== data.id), data];
        }
        this.connector.setCollection(collection);
    }

    protected onDelete = (data: Props) => {
        let collection = this.connector.getCollection();
        collection = collection.filter(item => item.id !== data.id);
        this.connector.setCollection(collection);
    }

    protected getData = (id:ID) => {
        const collection = this.connector.getCollection();
        if(!id) return collection;
        const [item] = collection.filter(item => item.id === id);
        return item;
    } 

    public static getCollection = (dataStruct: DataStruct) => {
        const connector = new DriverConnector(dataStruct.type, dataStruct.collectionName );
        return connector.getCollection();
    } 
    
}

class DriverConnector {
    private connectionInstance = null;
    private key:string = '';

    constructor(type, key) {
        this.key = key;        
        switch (type) {
            case STORAGE:
                //storage initiation
                this.connectionInstance = new StorageConnector();
                break;
            case SQL:
                //sql initiation
                this.connectionInstance = new SQLConnector();                
                break;
            case GRAPHQL:
                //graphql initiation
                this.connectionInstance = new GraphQLConnector();                
                break;                    
            default:
                break;
        }
    }

    public setCollection = (data) => {
        this.connectionInstance.setData(this.key, data);
        return true;
    }

    public getCollection = (query='') => {
        const data = this.connectionInstance.getData(this.key);
        return data;
    }
}

class StorageConnector {

    public setData = (key, data) => {
       return localStorage.setItem(key, JSON.stringify(data));
    }

    public getData = (key) => {
        const item = localStorage.getItem(key);
        if(!item) return [];    
        return JSON.parse(item);
    }    
}

class SQLConnector {}

class GraphQLConnector {}