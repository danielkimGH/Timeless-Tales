import PropTypes from 'prop-types';

/**
 * Displays the life bar of the user
 * @param {number} lives
 * @param {string} genre
 */

const health = {
    Western: '/healthbars/westernHealth.png',
    SciFi: '/healthbars/westernHealth.png',
    Fantasy: '/healthbars/westernHealth.png'
}

const healthLost = {
    Western: '/healthbars/westernHealthLost.png',
    SciFi: '/healthbars/westernHealthLost.png',
    Fantasy: '/healthbars/westernHealthLost.png'
}

function AvatarLife({ genre, lives }) {

    const maxHealth = 3;

    const healthDisplay = health[genre];
    const healthLostDisplay = healthLost[genre];

    const healthBarDisplay = [];

    for (let i = 0; i < maxHealth; i++) {
        if (i < lives) {
            healthBarDisplay.push(<img key={i + 1} src={healthDisplay} alt="Avatar One Life" />)
        }
        else {
            healthBarDisplay.push(<img key={i + 1} src={healthLostDisplay} alt="Avatar One Life Lost" />)
        }
    }

    return (
        <div>
            {healthBarDisplay}
        </div>

    );
}

export default AvatarLife;

AvatarLife.propTypes = {
    lives: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired
}