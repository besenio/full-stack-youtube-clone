import React from 'react';

class EditVideoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props;
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        this.props.updateVideo(formData);
    };

    handleTitleInput(e) {
        this.setState({ title: e.currentTarget.value });
    };

    handleDescriptionInput(e) {
        this.setState({ description: e.currentTarget.value });
    };

    render() {
        return (
            <div className="edit-video-form">
                <h1>Update Your Video Here</h1>
                <h2>{this.state.video.title}</h2>
                <label>Thumbnail
                    <input type="file" onChange={this.handleThumbnailFile}/>
                </label>
                <label>Title
                    <input type="text" onChange={this.handleTitleInput} placeholder="Add a title that describes your video"/>
                </label>
                <label>Description
                    <input type="text" onChange={this.handleDescriptionInput} placeholder="Tell viewers about your video"/>
                </label>
                <input type="submit" onClick={this.handleSubmit}/>
            </div>
        )
    }
}

export default EditVideoForm;
