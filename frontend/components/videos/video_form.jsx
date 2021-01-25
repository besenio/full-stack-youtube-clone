import React, { useState } from 'react';

const videoForm = (props) => {
    const [video, setVideo] = useState(props.video);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', video.title);
        formData.append('video[description]', video.description);
        if (video.videoFile) {
            formData.append('video[video]', video.videoFile);
        }
        if (video.thumbnailFile) {
            formData.append('video[thumbnail]', video.thumbnailFile);
        }
        props.createVideo(formData);
        setLoading(true);
    };

    const handleTitleInput = (e) => {
        setVideo({...video, title: e.currentTarget.value});
    };

    const handleDescriptionInput = (e) => {
        setVideo({...video, description: e.currentTarget.value});
    };

    const handleVideoFile = (e) => {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setVideo({...video, videoFile: file, videoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

    const handleThumbnailFile = (e) => {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setVideo({...video, thumbnailFile: file, thumbnailUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

    const previewThumbnail = video.thumbnailUrl ? <img src={video.thumbnailUrl} /> : null;

    let uploadButton;
    let loaded;
    if (loading) {
        uploadButton = <input type="submit" value="Upload" className="create-upload-button-disabled" disabled/>
        loaded = <div className="video-uploaded">Video uploaded! It will appear in the splash page shortly...</div>
    } else {
        uploadButton = <input type="submit" onClick={handleSubmit} value="Upload" className="create-upload-button"/>
        loaded = <div></div>
    }

    return (
        <div className="create-video-form">
            <div className="create-video-form-header">
                <h1>UPLOAD VIDEO</h1>
                <i className="fas fa-times" onClick={props.closeModal}></i>
            </div>
            <h2>Details</h2>
            <div className="create-video-form-body">
                <div className="create-video-form-body-left">
                    <div>Thumbnail Link</div>
                    <input type="file" onChange={handleThumbnailFile}/>
                    <div className="preview-thumbnail">{previewThumbnail}</div>
                    <div>Video Link</div>
                    <input type="file" onChange={handleVideoFile}/>
                </div>
                <div className="create-video-form-body-right">
                    <div>Title (Required)</div>
                    <input type="text" onChange={handleTitleInput} placeholder="Add a title that describes your video"/>
                    <div>Description</div>
                    <textarea type="text" onChange={handleDescriptionInput} placeholder="Tell viewers about your video"/>
                    {uploadButton}
                    {loaded}
                </div>
            </div>
        </div>
    );
};

export default videoForm;