import { Task } from './Task';
export { TaskProps } from './Task'; 

export default Task;
/*
** Task mini app for creating the game
*  
*   Class Task
        {
            id
            parentId
            sprintId[]
            name
            description
            estimated
            charge
            status

            create()
            set()
            addTime()
            changeStatus()
            isFinished()

        }
    Class Sprint
        {
            id
            name
            number
            startTime
            finishTime
            status

            create()
            addTask()
            removeTask()
            changeStatus()
            isFinished()
            isOverdue()
        }
        
    type status {
        FINISH
        OPEN
        READY
        CLOSE
        WAIT
    }    

    Class Alerts 
    {
        id
        taskId
        alertTime

        create()
        run()
        pause()
        remove()
        isPending()
    }


    Tareas:

    crear tarea --> para crear una nueva tarea
    getFormData --> metodo para poder hacer los formularios, 
                    devuelve un objeto con los tipos de prop
    save()      --> el save se encarga de comunicarse 
                    con el driver guardar la info y devolver el estado.
    load()      --> carga los datos desde el driver.

    cuando carga uno o el otro?
*/