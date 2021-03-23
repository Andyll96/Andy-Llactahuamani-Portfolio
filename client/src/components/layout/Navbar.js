import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { clearCurrentAlbum, clearCurrentImage} from '../../actions/photosActions';


const Navbar = ({ title, icon, clearCurrentAlbum, clearCurrentImage }) => {
    return (
        <div className='navbar container'>
            <h1>
                {/* icon */}
                <i className={icon}> {title}</i>
            </h1>
            <ul>
                <li><Link to='/' onClick={() => {clearCurrentAlbum(); clearCurrentImage(); document.body.style.overflow = 'unset';}}>Home</Link></li>
                <li><Link to='/about' onClick={() => {clearCurrentAlbum(); clearCurrentImage(); document.body.style.overflow = 'unset';}}>About</Link></li>
                <li><Link to='/photos' onClick={() => {clearCurrentAlbum(); clearCurrentImage(); document.body.style.overflow = 'unset';}}>Photo</Link></li>
                <li><Link to='/film' onClick={() => {clearCurrentAlbum(); clearCurrentImage(); document.body.style.overflow = 'unset';}}>Film</Link></li>
                <li><Link to='/code' onClick={() => {clearCurrentAlbum(); clearCurrentImage(); document.body.style.overflow = 'unset';}}>Code</Link></li>
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

export default connect(mapStateToProps, { clearCurrentAlbum, clearCurrentImage })(Navbar);
