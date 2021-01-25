import React, { useState, useEffect } from 'react';

const editVideoForm = (props) => {
    const [video, setVideo] = useState(props.video);

    useEffect(() => {
        props.fetchVideo(props.match.params.videoId)
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[id]', props.match.params.videoId)
        formData.append('video[title]', video.title);
        formData.append('video[description]', video.description);
        props.updateVideo(formData)
            .then(() => props.history.push(`/videos/${props.video.id}`));
    };

    const handleTitleInput = (e) => {
        setVideo({...video, title: e.currentTarget.value});
    };

    const handleDescriptionInput = (e) => {
        setVideo({...video, description: e.currentTarget.value});
    };

    const handleDelete = () => {
        props.deleteVideo(props.match.params.videoId);
        props.history.push('/');
    };

    const handleCancel = () => {
        props.history.push(`/videos/${props.video.id}`);
    };

    if (props.video) {
        return (
            <div className="edit-video-form">
                <div className="edit-video-form-header">
                    <h1>Update Your Video Details</h1>
                </div>
                <div className="edit-video-form-body">
                    <div className="edit-video-form-left">
                        <h2>{props.video.title}</h2>
                        <img src={props.video.thumbnailUrl} width="350" height="250" />
                    </div>
                    <div className="edit-video-form-right">
                        <label className="edit-video-form-title">Title:
                            <input type="text" onChange={handleTitleInput} value={video.title} placeholder="Add a title that describes your video"/>
                        </label>
                        <label className="edit-video-form-description">Description:
                            <textarea type="text" onChange={handleDescriptionInput} value={video.description} placeholder="Tell viewers about your video"/>
                        </label>
                        <div className="edit-video-form-bottom-right">
                            <input type="submit" onClick={handleSubmit} value="Update"></input>
                            <input type="submit" onClick={handleDelete} value="Delete Video"/>
                            <input type="submit" onClick={handleCancel} value="Cancel"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return null;
    }
};

export default editVideoForm;