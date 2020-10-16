import React from 'react';
import VideoIndexItem from '../videos/video_index_item';
import { Link } from 'react-router-dom';

class SearchVideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos(this.props.match.params.query);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.query && prevProps.query != this.props.match.params.query) {
            this.props.fetchVideos(this.props.match.params.query);
            window.scrollTo(0, 0);
        }
    }

    render() {

        let vidResults;
        if (this.props.videos.length === 0) {
            vidResults = "No Results"
        } else {
            vidResults = "Search Results"
        }

        return(
            <div className="videos-index">
                <div className="video-index-sidebar">
                    <Link to='/' className="video-index-home">
                        <i className="fas fa-home"></i>
                        <div>Home</div>
                    </Link>
                    <a href="https://github.com/besenio" target="_" className="video-index-github">
                        <i className="fab fa-github"></i>
                        <div>Github</div>
                    </a>
                    <a href="https://www.linkedin.com/in/kevin-besenio/" target="_" className="video-index-linkedin">
                        <i className="fab fa-linkedin"></i>
                        <div>LinkedIn</div>
                    </a>
                    <a href="https://angel.co/u/besenio" target="_" className="video-index-angellist">
                        <i className="fab fa-angellist"></i>
                        <div>AngelList</div>
                    </a>
                </div>
                <div className="video-index-main">
                    <h1>{vidResults}</h1>
                    <ul className="videos-all">
                        {
                            this.props.videos.map(video => (
                                <VideoIndexItem video={video} key={video.id}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SearchVideoIndex;
