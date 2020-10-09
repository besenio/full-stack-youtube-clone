@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :uploader_id, :title, :description, :views
        json.extract! video.uploader, :username
        json.videoUrl url_for(video.video)
        json.thumbnailUrl url_for(video.thumbnail)
        json.publishDate video.created_at.strftime("%b %d, %Y")
        json.numLikes video.num_likes
        json.numDislikes video.num_dislikes
    end
end
