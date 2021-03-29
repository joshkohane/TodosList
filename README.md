# Todos List

Todos List is a full stack app with CRUD functionality for Lists, Tasks, and Comments. It was created using React/Redux on the frontend with SASS styling, Ruby (v 2.5.1) on Rails (v 5.2.4) on the backend, and a PostgreSQL database.

## To run locally

Git clone the repo to download the project locally.

To install, run these commands in the terminal:

* bundle install (try deleting Gemfile.lock if you run into any issues)
* npm install
* rails db:setup

To run on a server, run these two commands simultaneously in the terminal:

* rails s
* npm start

Todos List has two mains views. Below is the first view, the List Index.

![Todos Lists](https://github.com/joshkohane/TodosList/blob/master/app/assets/images/Todos%20Lists.png)

The second view is the Task show page. Each task has comments associated that can be added, edited or deleted on the task show page.

![Todos Tasks](https://github.com/joshkohane/TodosList/blob/master/app/assets/images/Todos%20Tasks.png)
