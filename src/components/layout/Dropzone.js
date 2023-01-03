import React, { Component } from 'react';

export default class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.onFilesAdded = this.onFilesAdded.bind(this);

    this.openFileDialog = this.openFileDialog.bind(this);
  }
  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const files = evt.target.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  }
  fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  render() {
    return (
      <div className="Dropzone">
        {/* <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        /> */}
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <span>Upload Files</span>
      </div>
    );
  }
}
