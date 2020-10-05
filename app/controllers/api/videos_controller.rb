class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def create
        @video = Video.new(video_params)
        @video.uploader_id = current_user.id

        if @video.save
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    def show
        @video = Video.find(params[:id])
        render :show
    end

    def update
        @video = current_user.videos.find_by(id: params[:id])
        if @video && @video.update(video_params)
            render :show
        else
            render json: ['You are not the owner of this video'], status: 422
        end
    end

    def destroy
        @video = current_user.videos.find(params[:id])
        
        if current_user.id != @video.uploader_id
            render json: ['You are not the owner of this video'], status: 422
        else
            @video.destroy
            render :show
        end
    end

    def update_views
        @video = Video.find(params[:id])

        if @video.update(update_views_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 422
        end
    end

    private

    def video_params
        params.require(:video).permit(:uploader_id, :title, :description, :video, :thumbnail)
    end

    def update_views_params
        params.require(:video).permit(:views)
    end

end
