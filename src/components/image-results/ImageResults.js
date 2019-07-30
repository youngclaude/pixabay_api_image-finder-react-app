import React, { Component }from 'react';

class ImaageResults extends Component{
    render(){
        return this.props.Images.map((image) =>(
            <img src={image.previewURL} />
            )
        );
    }
}

export default ImaageResults