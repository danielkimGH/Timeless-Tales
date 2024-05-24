import PropTypes from 'prop-types';

/**
 * Displays the avatar image and name given the character name, genre, and avatar identification number
 * @param {string} name 
 * @param {number} avatar
 * @param {string} genre
 */

const avatars = {
    Western: ['/avatars/western1-250.png', '/avatars/western2-250.png', '/avatars/western3-250.png'],
    SciFi: ['/avatars/scifi1-250.png', '/avatars/scifi2-250.png', '/avatars/scifi3-250.png'],
    Fantasy: ['/avatars/fantasy1-250.png', '/avatars/fantasy2-250.png', '/avatars/fantasy3-250.png']
}

function AvatarDisplay({ name, avatar, genre }) {

    const avatarIdx = avatar - 1
    const avatarDisplay = avatars[genre][avatarIdx];

    return (
        <div className='avatar-container'>
            <div>
                <img src={avatarDisplay} alt="Avatar Image" className='avatar' />
            </div>
            <div>
                <div className='avatar-name' >{name}</div>
            </div>
        </div>
    );
}

export default AvatarDisplay;

AvatarDisplay.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
}