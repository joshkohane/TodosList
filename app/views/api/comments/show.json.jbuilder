json.comment do
    json.set! @comment.id do
        json.extract! @comment, :id, :text, :task_id
    end
end