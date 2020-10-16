import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_VIDEO_ERRORS = 'CLEAR_VIDEO_ERRORS';

const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos
})

const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
})

const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
})

export const receiveVideoErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});
  
export const clearVideoErrors = () => ({
    type: CLEAR_VIDEO_ERRORS
});

export const fetchVideos = query => dispatch => {
    return VideoAPIUtil.fetchVideos(query)
        .then(videos => dispatch(receiveVideos(videos)))
};

export const fetchVideo = videoId => dispatch => {
    return VideoAPIUtil.fetchVideo(videoId)
        .then(video => dispatch(receiveVideo(video)))
};

export const createVideo = video => dispatch => {
    return VideoAPIUtil.createVideo(video)
        .then(createdVideo => dispatch(receiveVideo(createdVideo)),
                errors => dispatch(receiveVideoErrors(errors)))            
};

export const updateVideo = video => dispatch => {
    return VideoAPIUtil.updateVideo(video)
        .then(updatedVideo => dispatch(receiveVideo(updatedVideo)),
                errors => dispatch(receiveVideoErrors(errors)))            
};

export const deleteVideo = videoId => dispatch => {
    return VideoAPIUtil.deleteVideo(videoId)
        .then(() => dispatch(removeVideo(videoId)),
            errors => dispatch(receiveVideoErrors(errors)))
};

export const updateViews = video => dispatch => {
    return VideoAPIUtil.updateViews(video)
        .then(video => dispatch(receiveVideo(video)))
};
