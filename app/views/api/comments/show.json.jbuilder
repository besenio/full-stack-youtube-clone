json.extract! @comment, :id, :author_id, :video_id, :body
json.author @comment.user.username
