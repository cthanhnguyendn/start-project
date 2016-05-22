/**
 * Created by THANHBEO on 5/22/2016.
 */
import React from 'react';
var Dropzone = require('react-dropzone');

const DropZone = React.createClass({
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

        axios.post('/upload', data, config)
        //axios.post('/upload',{
        //    method: 'POST',
        //    headers: {
        //        'Content-Type': 'multipart/form-data'
        //    },
        //    body:files
        //});
    },
    render() {
        return (
            <div>
                <Dropzone onDrop={this.onDrop}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>

            </div>
        );
    }
});

export default DropZone;
