json.task do
    json.set! @task.id do
        json.extract! @task, :id, :title, :description, :list_id, :status
    end
end

json.comments do
    @task.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :text, :task_id
        end
    end
end