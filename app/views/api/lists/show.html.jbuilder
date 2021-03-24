json.list do
    json.set! @list.id do
        json.extract! @list, :id, :title
    end
end

json.tasks do
    @list.tasks.each do |task|
        json.set! task.id do
            json.extract! task, :id, :title, :status
        end
    end
end