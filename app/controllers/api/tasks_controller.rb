class Api::TasksController < ApplicationController
    def show
        @task = Task.find_by(id: params[:id])

        if @task
            render :show
        else
            render json: @task.errors.full_messages, status: 401
        end
    end

    def create
        @task = Task.new(task_params)
        
        if @task.save
            render :show
        else
            render json: @task.errors.full_messages, status: 401
        end
    end

    def update
        @task = Task.find_by(id: params[:id])

        if @task.update(task_params)
            render :show
        else
            render json: @task.errors.full_messages, status: 401
        end
    end

    def destroy
        @task = Task.find_by(id: params[:id])
        @task.destroy
        render :show
    end

    private

    def task_params
        params.require(:task).permit(:title, :description, :status, :list_id)
    end
end
