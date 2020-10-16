export const fetchVideos = query => (
    $.ajax({
        method: 'GET',
        url: '/api/videos',
        data: { query }
    })
);

export const fetchVideo = videoId => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}`
    })
);

export const createVideo = formData => (
    $.ajax({
        method: 'POST',
        url: '/api/videos',
        data: formData,
        contentType: false,
        processData: false
    })
);

export const updateVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.get('video[id]')}`,
        data: video,
        contentType: false,
        processData: false
    })
);

export const deleteVideo = videoId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/videos/${videoId}`
    })
);

export const updateViews = video => (
    $.ajax({
        method: 'PATCH',
        url: `/api/videos/${video.id}/views`,
        data: { video }
    })
);
