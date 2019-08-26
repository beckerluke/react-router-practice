import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PortfolioButton extends Component {
    handleClick = () => {
        this.props.history.push('/portfolio');
    }

    render() {
        return (
            <button onClick={this.handleClick}>Go To Portfolio</button>
        )
    }
}

export default withRouter(PortfolioButton);
