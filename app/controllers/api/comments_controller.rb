class Api::CommentsController < ApplicationController

    def index
        @comments = Comment.all
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        @comment.author_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = current_user.comments.find(params[:id])
        
        if current_user.id != @comment.author_id
            render json: ['You are not the author of this comment'], status: 422
        else
            @comment.destroy
            render :show
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :video_id)
    end

end
