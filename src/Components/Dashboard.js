import Assignments from './Assignments'

const Dashboard = ({
    assignments,
    onDelete,
}) => 
    {
        const total = assignments.length
    

    return (

        <section className = 'viewDashboard'>
            <div className = 'sectionHeading'>
                <div>
                    <p className='brow'>Student Overview</p>
                    <h2>Assignment Viewer</h2>
                    <p className= 'muted'> Tracks what's due and when it needs to be submitted </p>
                </div>
            </div>

            {assignments.length > 0 ? (
                <Assignments
                    assignments={assignments}
                    onDelete={onDelete}
                />
            ) : (
                <p className = 'Empty'> No assignments at this time</p>
            )}
        </section>

    )
    }


export default Dashboard
