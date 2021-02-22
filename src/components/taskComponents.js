import React from 'react'
import NewListForm from './NewListForm'
import TaskList from './TaskList'

export default function taskComponents() {
    return (
        <div>
            <TaskList />
            <hr />
            Créer une nouvelle tache 
            <br></br>
        <NewListForm />
        </div>
    )
}
