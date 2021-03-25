@lists.each do |list|
    json.set! list.id do
        json.extract! list, :id, :title
        json.tasks do
            list.tasks.each do |task|
                json.set! task.id do
                    json.extract! task, :id, :title, :status
                end
            end
        end
    end
end
