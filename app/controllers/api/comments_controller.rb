class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if @comment.update(comment_params)
            render :show
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
        render :show
    end

    private
    
    def comment_params
        params.require(:comment).permit(:task_id, :text)
    end
end
