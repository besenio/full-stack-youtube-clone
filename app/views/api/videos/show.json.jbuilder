json.extract! @video, :id, :uploader_id, :title, :description, :created_at, :views
json.extract! @video.uploader, :username
json.videoUrl url_for(@video.video)
json.thumbnailUrl url_for(@video.thumbnail)
json.publishDate @video.created_at.strftime("%b %d, %Y")

json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :author_id, :video_id
            json.author comment.user.username
        end
    end
end
