
import Assignments from './Assignments'


  //Add Assignment
 const addAssignment = (assignments, newAssignment) => {
  const assignmentToAdd = {
    id: Math.floor(Math.random() * 10000) + 1,
    text: newAssignment.text,
    due_date: newAssignment.due_date
  }

  //Adds the new assignment by concatonating the contents into the list
  return assignments.concat(assignmentToAdd)
 }

 export default addAssignment