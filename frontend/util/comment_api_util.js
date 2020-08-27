export const fetchComments = videoId => (
    $.ajax({
        method: 'GET',
        url: `/api/videos/${videoId}/comments`
    })
);

export const createComment = comment => (
    $.ajax({
        method: 'POST',
        url: `/api/videos/${comment.video_id}/comments`,
        data: { comment }
    })
);

export const deleteComment = commentId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/comments/${commentId}`
    })
);
