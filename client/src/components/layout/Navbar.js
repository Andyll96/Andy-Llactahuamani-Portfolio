import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCurrentAlbum} from '../../actions/photosActions';


const Navbar = ({ title, icon, clearCurrentAlbum }) => {
    return (
        <div className='navbar container'>
            <h1>
                {/* icon */}
                <i className={icon}> {title}</i>
            </h1>
            <ul>
                <li><Link to='/' onClick={() => clearCurrentAlbum()}>Home</Link></li>
                <li><Link to='/about' onClick={() => clearCurrentAlbum()}>About</Link></li>
                <li><Link to='/photos' onClick={() => clearCurrentAlbum()}>Photo</Link></li>
                <li><Link to='/film' onClick={() => clearCurrentAlbum()}>Film</Link></li>
                <li><Link to='/code' onClick={() => clearCurrentAlbum()}>Code</Link></li>
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title:'AN\nDY',
    icon: 'navbar-logo'
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps, { clearCurrentAlbum })(Navbar);
