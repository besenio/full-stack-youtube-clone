json.extract! @video, :id, :uploader_id, :title, :description, :created_at, :views
json.extract! @video.uploader, :username
json.videoUrl url_for(@video.video)
json.thumbnailUrl url_for(@video.thumbnail)
json.publishDate @video.created_at.strftime("%b %d, %Y")
