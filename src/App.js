//hook useState
import { useState } from 'react'
import Header from './Components/Header'
import Assignments from './Components/Assignments'
import Dashboard from './Components/Dashboard'
import AssignmentForm from './Components/AssignmentForm'
import addAssignment from './Components/addAssignment'
import About from './Components/about'

function App() {
  const [assignments, setAssignments] = useState(
    [
        {
        id: 1,
        text: 'Internet Programming: React Assignment',
        due_date: 'Sunday Oct 18th',
        reminder: true,
    },

    {
        id: 2,
        text: 'Technical Writing: Project 3 Plan',
        due_date: 'Sunday Oct 18th',
        reminder: true,
    },

    {
        id: 3,
        text: 'Computer Architecture: Homework 2',
        due_date: 'Tuesday Oct 20th',
        reminder: true,
    },

    {
        id: 4,
        text: 'Databases: Phase 2 Submission',
        due_date: 'Sunday Oct 18th',
        reminder: true,
    },

    {
        id: 5,
        text: 'Poly Science: Quiz 1',
        due_date: 'Monday Oct 19th',
        reminder: true,
    },
    ])

//State to control what view/page is currently being displayed
const [currentView, setCurrentView] = useState('dashboard')

//State to control whether or not the form fields are visible
const [showForm, setShowForm] = useState(false)

  //Delete Assignment
 const deleteAssignment = (id) =>{
  setAssignments(assignments.filter((assignment) => assignment.id !== id))
}

//Adds assignments
 const handleAddAssignment = (newAssignment) => {
    setAssignments(addAssignment(assignments, newAssignment))
    setShowForm(false)
  }

 //Displays contents and a conditional statement if the length of the assignment list is empty
  return (
   
   <div className = 'appShell'>
    <Header
      title="Student Work Tracker"
      currentView={currentView}
      onChangeView={setCurrentView}
      onToggleForm={() => setShowForm(!showForm)}
      showform={showForm}
    />
   
   
    <main className="container">
        {currentView === 'dashboard' ? (
          <>
          {showForm && <AssignmentForm onAdd={handleAddAssignment} />}

          <Dashboard 
            assignments={assignments}
            onDelete={deleteAssignment}
            />
          </>
        ) : (
          <About />
        )}
    </main>
    


        <footer className='footer'>
          <p>Student Assignment Tracker @2026 Norland</p>
        </footer>
    </div>
  )
}

export default App;