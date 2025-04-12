import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Download from 'material-ui/svg-icons/file/file-download';
import './ImageResults.css';

class ImageResults extends Component {
  state = {
    open: false,
    currentImg: ''
  };

  handleDownload = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'image.jpg'; // hoặc đổi tên theo img.tags
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Download failed:', err);
    }
  };
  

  handleOpen = img => {
    this.setState({ open: true, currentImg: img });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <GridList className="grid-list" cols={3}>
        {images.map(img => (
          <GridTile
            title={img.tags}
            key={img.id}
            className="grid-tile"
            subtitle={
              <span>
                by <strong>{img.user}</strong>
              </span>
            }
            actionIcon={
              <div className="tile-actions">
                <IconButton onClick={() => this.handleOpen(img.largeImageURL)}>
                  <ZoomIn color="white" />
                </IconButton>
                <IconButton onClick={() => this.handleDownload(img.largeImageURL)}>
                  <Download color="white" />
                </IconButton>
              </div>
            }
          >
            <img src={img.largeImageURL} alt={img.tags} />
          </GridTile>
        ))}
      </GridList>
      
      );
    }
    else {
      imageListContent = null;
    }

    const actions = [
      <FlatButton label="Close" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        {imageListContent}
        <Dialog
  actions={actions}
  modal={false}
  open={this.state.open}
  onRequestClose={this.handleClose}
>
  <img src={this.state.currentImg} alt="" className="dialog-image" />
</Dialog>

      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageResults;
