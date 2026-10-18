import PropTypes from 'prop-types'

const Button = ({color, text, onClick, type='button'}) => {
    
    return( 
        <button 
        onClick={onClick} 
        type={type}
        style={{backgroundColor: color}} 
        className='btn'>
            {text}
        </button>
    )
}

//Sets the default display of the button
Button.defaultProps = {
    color: 'steelblue'
}

//Sets the display text type
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button