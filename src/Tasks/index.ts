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

        run()
        pause()
        remove()
        isPending()
    }
*/