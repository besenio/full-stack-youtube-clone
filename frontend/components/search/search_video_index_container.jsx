import { connect } from 'react-redux';
import SearchVideoIndex from './search_video_index';
import { fetchVideos } from '../../actions/video_actions';

const mSTP = (state, ownProps) => ({
   query: ownProps.match.params.query,
   videos: Object.values(state.entities.videos)
});

const mDTP = dispatch => ({
   fetchVideos: query => dispatch(fetchVideos(query))
})

export default connect(mSTP, mDTP)(SearchVideoIndex);
