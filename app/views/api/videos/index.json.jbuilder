@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :uploader_id, :title, :description
        json.extract! video.uploader, :username
        json.videoUrl url_for(video.video)
        json.thumbnailUrl url_for(video.thumbnail)
    end
end
