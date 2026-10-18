
//Information About the site and how it works
const about = () => {
    return (
        <section className= 'aboutView'>
            <p className='view'> About this Site</p>
            <h2>An easy way for students to track their workload</h2>
            <p>The Student Assignment Tracker and Management Site allows students to input their assignments alongside the due dates in one place that can also be removed after completion</p>

            <h3> How the site works</h3>
            <ul>
                <li>Add assignments with their names and due dates</li>
                <li>Remove assignments that have been completed</li>
            </ul>

            <p className='muted'>
                This project demonstrates the use of React Components, props, state, controlled inputs, event handlers, rendering, and list redering with the map command
            </p>
        </section>
    )
}





export default about