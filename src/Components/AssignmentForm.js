import {useState} from 'react'
import Button from './Button'


const AssignmentForm = ({onAdd}) => {
    //Controlled input with react states
    const[text, setText] = useState('')
    const[dueDate, setDueDate] = useState('')
    const[reminder, setReminder] = useState(false)
    const[error, setError] = useState('')

    //Prevents the page from changing pages
    const handleSubmit = (event) =>
    {
        event.preventDefault()
    
        //Handles Empty submissions
        if (!text.trim() || !dueDate)
        {
            setError('Please enter a value for assignment name and/or due date')
            return
        }

        //Handles adding assignments
        onAdd({
            text: text.trim(),
            due_date: dueDate,
        })

        //Sets the lists
        setText('')
        setDueDate('')
        setReminder(false)
        setError('')
    }
    
    //Displays the Submission form to add new assigments to the system
    return(
        <form className='assignmentForm' onSubmit={handleSubmit}>
            <h2>Add an Assignment</h2>
            <p classname='muted'>Enter your assignment details in the box to add it to the site</p>
            
            <div className='formController'>
                <label htmlFor='assignmentText'> Assignment Name</label>
                <input
                    id="assignmentText"
                    type='text'
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    placeholder="i.e. Comp Arch: Exam"
                    />
            </div>

            <div className='formController'>
                <label htmlFor='AssignmentDueDate'>Due Date</label>
                <input 
                    id='AssignmentDueDate'
                    type='text'
                    value={dueDate}
                    onChange={(event) => setDueDate(event.target.value)}
                    placeholder="i.e. Sunday Oct 15"
                    />
            </div>

            <div className='formController' formCheck>
                <input 
                    id='AssignmentReminder'
                    type='checkbox'
                    value={reminder}
                    onChange={(event) => setReminder(event.target.checked)}
                    placeholder="i.e. Sunday Oct 15"
                    />
            </div>

            {error && <p className='formError' role='alert'>{error}</p>}

            <Button text='Save Assignment' type='submit' />

        </form>
    )


}


export default AssignmentForm