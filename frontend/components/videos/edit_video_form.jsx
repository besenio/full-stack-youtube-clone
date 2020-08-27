import React from 'react';

class EditVideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.video;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handleDescriptionInput = this.handleDescriptionInput.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[id]', this.props.match.params.videoId)
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        this.props.updateVideo(formData)
            .then(() => this.props.history.push(`/videos/${this.props.video.id}`));
    };

    handleTitleInput(e) {
        this.setState({ title: e.currentTarget.value });
    };

    handleDescriptionInput(e) {
        this.setState({ description: e.currentTarget.value });
    };

    handleDelete(e) {
        this.props.deleteVideo(this.props.match.params.videoId);
        this.props.history.push('/');
    };

    handleCancel() {
        this.props.history.push(`/videos/${this.props.video.id}`);
    };

    afterMount() {
        return (
            <div className="edit-video-form">
                <div className="edit-video-form-header">
                    <h1>Update Your Video Details</h1>
                </div>
                <div className="edit-video-form-body">
                    <div className="edit-video-form-left">
                        <h2>{this.props.video.title}</h2>
                        <img src={this.props.video.thumbnailUrl} width="350" height="250" />
                    </div>
                    <div className="edit-video-form-right">
                        <label className="edit-video-form-title">Title:
                            <input type="text" onChange={this.handleTitleInput} placeholder="Add a title that describes your video"/>
                        </label>
                        <label className="edit-video-form-description">Description:
                            <textarea type="text" onChange={this.handleDescriptionInput} placeholder="Tell viewers about your video"/>
                        </label>
                        <div className="edit-video-form-bottom-right">
                            <input type="submit" onClick={this.handleSubmit} value="Update"></input>
                            <input type="submit" onClick={this.handleDelete} value="Delete Video"/>
                            <input type="submit" onClick={this.handleCancel} value="Cancel"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.props.video === undefined ? null : this.afterMount()
        )
    }
}

export default EditVideoForm;
