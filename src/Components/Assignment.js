//Imports the FaTimes icon
import {FaTimes} from 'react-icons/fa'

const Assignment = ( {assignment, onDelete }) => {
    return(
        //Displays the contents of the list to the screen as well as 
        //Adding icons for later deletion purposes
        <div className='task'>
            <h3>{assignment.text} <FaTimes style={{color: 'red'}} onClick={() => onDelete(assignment.id)}/></h3>
            <p>{assignment.due_date}</p>
        </div>
    )
}

export default Assignment