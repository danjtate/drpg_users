import PropTypes from 'prop-types'
import './css/header.css';

const Header = (props) => {
  return (
    <div className='header'>
        {props.title}
        
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
