class Api::ListsController < ApplicationController
    def index
        @lists = List.all
        render :index
    end

    def show
        @list = List.find_by(id: params[:id])
        
        if @list
            render :show
        else
            render json: @list.errors.full_messages, status: 401
        end
    end

    def create
        @list = List.new(list_params)

        if @list.save
            render :show
        else
            render json: @list.errors.full_messages, status: 401
        end
    end

    def update
        @list = List.find_by(id: params[:id])

        if @list.update(list_params)
            render :show
        else
            render json: @list.errors.full_messages, status: 401
        end
    end

    def destroy
        @list = List.find_by(id: params[:id])
        @list.destroy
        render :show
    end

    private

    def list_params
        params.require(:list).permit(:title)
    end
end
