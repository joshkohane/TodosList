# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

List.destroy_all
Task.destroy_all
Comment.destroy_all

list1 = List.create(title: "Shopping")
list2 = List.create(title: "Housework")
list3 = List.create(title: "Entertainment")

task1 = Task.create(title: "Trader Joe's", description: "Good for cheap vegetables - also has a great deal on bananas", list_id: list1.id)
task2 = Task.create(title: "Whole Foods", description: "Get all the meat from here", list_id: list1.id, status: true)
task3 = Task.create(title: "Macy's", description: "Awesome place for basics like socks and undershirts", list_id: list1.id)
task4 = Task.create(title: "Home Depot", description: "Home and Garden. Really helpful staff - make sure to ask them for help", list_id: list1.id)
task5 = Task.create(title: "Mow the lawn", description: "Needs to be done every 2 weeks", list_id: list2.id)
task6 = Task.create(title: "Call the plumber", description: "The upstairs toilet is broken again", list_id: list2.id, status: true)
task7 = Task.create(title: "Change the lightbulbs", description: "The hall lights and the kitchen lights", list_id: list2.id, status: true)
task8 = Task.create(title: "Movies", description: "It's Oscar season! Make sure to see everything good", list_id: list3.id)
task9 = Task.create(title: "Television", description: "Got to keep up with everything coming out on Netflix", list_id: list3.id)
task10 = Task.create(title: "New Music", description: "Who is releasing good music soon?", list_id: list3.id)
task11 = Task.create(title: "Video Games", description: "Just got the new PlayStation. Research new games to play on the new system", list_id: list3.id, status: true)
task12 = Task.create(title: "Books", description: "There's always time for reading", list_id: list3.id)

comment1 = Comment.create(text: "3 tomatoes", task_id: task1.id)
comment2 = Comment.create(text: "1 head of lettuce", task_id: task1.id)
comment3 = Comment.create(text: "3 bottles of wine", task_id: task1.id)
comment4 = Comment.create(text: "Cheddar cheese", task_id: task1.id)
comment5 = Comment.create(text: "Taco seasoning", task_id: task1.id)
comment6 = Comment.create(text: "Short ribs", task_id: task2.id)
comment7 = Comment.create(text: "Turkey breast", task_id: task2.id)
comment8 = Comment.create(text: "Grapes", task_id: task2.id)
comment9 = Comment.create(text: "Arugula", task_id: task2.id)
comment10 = Comment.create(text: "Hanes socks", task_id: task3.id)
comment11 = Comment.create(text: "2 X 4's", task_id: task4.id)
comment12 = Comment.create(text: "Blue paint", task_id: task4.id)
comment13 = Comment.create(text: "Drill", task_id: task4.id)
comment14 = Comment.create(text: "It's been a month! Just do it!", task_id: task5.id)
comment15 = Comment.create(text: "The upstairs toilet keeps leaking all over the floor", task_id: task6.id)
comment16 = Comment.create(text: "Also ask about the pipes under the sink", task_id: task6.id)
comment17 = Comment.create(text: "Minari", task_id: task8.id)
comment18 = Comment.create(text: "Nomadland", task_id: task8.id)
comment19 = Comment.create(text: "Promising Young Woman", task_id: task8.id)
comment20 = Comment.create(text: "Judas and the Black Messiah", task_id: task8.id)
comment21 = Comment.create(text: "The Queen's Gambit", task_id: task9.id)
comment22 = Comment.create(text: "The Crown", task_id: task9.id)
comment23 = Comment.create(text: "30 Rock", task_id: task9.id)
comment24 = Comment.create(text: "Bob's Burgers", task_id: task9.id)
comment25 = Comment.create(text: "Lana Del Ray", task_id: task10.id)
comment26 = Comment.create(text: "Nick Jonas", task_id: task10.id)
comment27 = Comment.create(text: "Julien Baker", task_id: task10.id)
comment28 = Comment.create(text: "Spider-Man: Miles Morales", task_id: task11.id)
comment29 = Comment.create(text: "Astro's Playroom", task_id: task11.id)
comment30 = Comment.create(text: "The Vanishing Half", task_id: task12.id)
comment31 = Comment.create(text: "Nickel Boys", task_id: task12.id)
comment32 = Comment.create(text: "Trust Exercise", task_id: task12.id)
comment33 = Comment.create(text: "A Children's Bible", task_id: task12.id)