import React from 'react';

class Item extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            crossed: false,
        }
    }

    handleClick = () => {
        this.setState({crossed: !this.state.crossed});
    }


    render() {
        const {name, onDelete, index} = this.props;
        let cross;
        this.state.crossed ? cross={textDecorationLine: "line-through"} : cross={};

        return(
            <div>
                <label style={cross} onClick={this.handleClick}>{name}</label>
                <input type='button' value='X' onClick={() => onDelete(index)}/>
            </div>
        );
    }

}

export default Item;