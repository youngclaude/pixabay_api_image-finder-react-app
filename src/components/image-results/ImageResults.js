import React, { Component }from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class ImaageResults extends Component {
    state = {
        open: false,
        currentImage: ''
    };

    handleOpen = img => {
        this.setState({open: true, currentImage: img});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        let imageListContent;// used to check if we have any data to show
        const {Images} = this.props;

        if (Images) {
            imageListContent = (
                <GridList cols={3}>
                    {/* Loop through the content of the array in a fill out the grid */}
                    {Images.map(image => (
                        <GridTile
                            title={image.tags}
                            key={image.id}
                            subtitle={
                                <span>
                                by <strong>{image.user}</strong>
                            </span>
                            }
                            actionIcon={
                                <IconButton onClick={() => this.handleOpen(image.largeImageURL) }>
                                    <ZoomIn color="white"/>
                                </IconButton>
                            }
                        >
                            <img src={image.largeImageURL} alt="" style={{width: '100%'}}/>

                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent = null;
        }

        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ]

        return (
            <div style={{margin: '0px 3rem'}} >
                {imageListContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}>
                    <img src={this.state.currentImage} alt="" style={{width: '100%'}}/>
                </Dialog>
            </div>
        )
    }

}

export default ImaageResults