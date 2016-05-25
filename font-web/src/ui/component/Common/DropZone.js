/**
 * Created by THANHBEO on 5/22/2016.
 */
import React from 'react';
var Dropzone = require('react-dropzone');
import axios from 'axios'

const DropZone = React.createClass({
    getInitialState() {
        return {
            files: [], uploading: false
        };
    },

    onDrop: function (files) {
        const config = {
            progress: function (progressEvent) {
                var percentCompleted = progressEvent.loaded / progressEvent.total;
            },
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };
        var data = new FormData()
        files.forEach((item)=> {
            data.append('files', item)
        });
        axios.post('/upload', data, config).then((reponse) => {
                if (Object.prototype.toString.call(this.props.value) === '[object Array]') {
                    this.props.onChange(reponse.data)
                } else {
                    this.props.onChange(reponse.data[0])
                }
                this({files: [], fetching: false});
            }
        )
        this.setState({files: files, fetching: true})
    },
    render() {
        return (
            <div>
                <Dropzone className="dropZone" onDrop={this.onDrop}>
                    {this.state.uploading ?
                        this.state.files.map((file)=>(
                            <div>
                                <img src={file.preview}/>
                                <div>loading...</div>
                            </div>)) : this.props.value ? <img src={this.props.value}/> :
                        <div>Try dropping some files here, or click to select files to upload.</div>
                    }
                </Dropzone>

            </div>
        );
    }
});

export default DropZone;
