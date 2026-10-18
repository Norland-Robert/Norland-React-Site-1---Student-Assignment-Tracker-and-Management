import Assignment from './Assignment'


const Assignments = ( { assignments, onDelete }) => {
    
    
    return(
        //Creating a list using the map command
        <>
            {assignments.map((assignment) => (
                <Assignment key={assignment.id} assignment={assignment} 
                onDelete={onDelete}/>))}

        </>
    )
}

export default Assignments