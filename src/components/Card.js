import React, {Component} from 'react';

class Card extends Component {

    removeCard = () => {
        this.props.removeCard(this.props.index)
    };

    render() {
        return (
            <div className='card'>
                <strong>{this.props.fullName}</strong>
                <p>{this.props.birthDate}</p>
                <button onClick={this.removeCard}><b>Done!</b></button>
            </div>
        )
    }
}

export default Card
