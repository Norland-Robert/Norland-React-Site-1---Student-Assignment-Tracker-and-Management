import PropTypes from 'prop-types'
import Button from './Button'

//Header Style to be used by the program
const Header = ({title , currentView, onChangeView, onToggleForm, showForm}) => {
    
    const onClick = () =>{
        console.log('click')
    }

    //Returns Value for Display from collected strings in the app file
    return(
        //Section for the Student Workspace
        //Followed by section for the button to display or not display the form fields
        <header className='siteHeader'>
            <div className='innerHeader'>
                <div>
                    <h1>{title}</h1>
                </div>
    
                <div classname='headerActions'>
                    {currentView === 'dashboard' && (
                        <Button 
                            text={showForm ? 'Close form' : '+ Add Assignment'}
                            onClick={onToggleForm}
                            color = 'blue' />
                    )}
                </div>
            </div>

            <nav className='viewNavigation' ariaLabel="Main Navigator">
                <button 
                    className={currentView === 'dashboard' ? 'navigationLink active' : 'navigationLink'}
                    onClick={() => onChangeView('dashboard') }
                    type='button'>
                    
                    Dashboard
                </button>

                <button className={currentView === 'about' ? 'navigationLink active' : 'navigationLink'}
                onClick={() => onChangeView('about')}
                type='button'>
                    About
                </button>
            </nav>
        </header>
        
    )
}


//Sets the default title
Header.defaultProps = {
    title: 'Student Assignment Management',
}

//Allows for strings to be passed for the site title
Header.propTypes = {
    title: PropTypes.string, 
}

export default Header
