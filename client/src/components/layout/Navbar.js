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
                <li><Link to='/' onClick={() => {clearCurrentAlbum(); clearCurrentImage()}}>Home</Link></li>
                <li><Link to='/about' onClick={() => {clearCurrentAlbum(); clearCurrentImage()}}>About</Link></li>
                <li><Link to='/photos' onClick={() => {clearCurrentAlbum(); clearCurrentImage()}}>Photo</Link></li>
                <li><Link to='/film' onClick={() => {clearCurrentAlbum(); clearCurrentImage()}}>Film</Link></li>
                <li><Link to='/code' onClick={() => {clearCurrentAlbum(); clearCurrentImage()}}>Code</Link></li>
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
