import React from 'react'
import PropTypes from 'prop-types';

class Bomb extends React.Component {
	constructor(props) {
		super();

		this.state = {
			secondsLeft: props.initialCount
		}
	}

	render() {
		if (this.props.initialCount > 0) {
			return <h3>{this.props.initialCount} seconds left before I go boom!</h3>
		} else {
			return <h3>Boom!</h3>
		}
	}
}

Bomb.propTypes = {
	initialCount: PropTypes.number
}

export default Bomb