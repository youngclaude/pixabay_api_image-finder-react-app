import React, { Component }from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class ImaageResults extends Component {
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
                            actionTcon={
                                <IconButton>
                                    <ZoomIn color="white"/>
                                </IconButton>
                            }
                        >
                            <img src={image.largeImageURL} alt=""/>

                        </GridTile>
                    ))}
                </GridList>
            )
        } else {
            imageListContent = null;
        }
        return (
            <div>
                {imageListContent}
            </div>
        )
    }

}

export default ImaageResults