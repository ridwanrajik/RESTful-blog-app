# blog-app
A basic blog app that provides platform to post write-ups. It implements CRUD operations by providing additional functionalities of updating and deleting created posts. It also implements the RESTful convention.
## Features
* Home Page
* New Post
* Edit Post
* Delete Post
## Getting started
Ensure you have node.js installed on your local machine. To be sure you have it installed, run the command `node -v`

Ensure you have mongodb installed on your local machine. To verify that you have mongodb installed;
* Open the command prompt on your windows machine. Note that it would only work on windows command prompt, and not the bash terminal
* Navigate to the root folder of MongoDB installation and run the command `mongo` or `mongo.exe`
* It will display the version of the installed MongoDB if currently installed

  ![mongo_cmd](https://user-images.githubusercontent.com/46408547/192557770-c5d15149-2122-47fe-8750-0e42b02d557b.JPG)
## Install and run
Run `npm install` to install the dependencies

To start the database;
* Open the command prompt on your windows machine. Again, note that this would only work on windows command prompt, and not the bash terminal
* Navigate to the root folder of MongoDB installation and run the command `mongod` or `mongod.exe`

  ![mongod_cmd](https://user-images.githubusercontent.com/46408547/192586013-3c9077d5-66e7-4a5d-b546-578cf4454f39.JPG)
* Ensure it prints `waiting for connection on port...`

  ![mongod_conn](https://user-images.githubusercontent.com/46408547/192588476-9adadcbb-83f9-4d32-be42-961b6ddcc8d2.JPG)

You can now go ahead and run the app using the following procedures
* Open any terminal of your choice
* Run the command `node app.js`
* Wait till the console prints `RESTful-blog-app server have started on port 3000!` and `Connected to database`

  ![run_app](https://user-images.githubusercontent.com/46408547/192593672-71bfaf60-c1d3-4620-a32e-b208472531b0.JPG)

At this point, the command prompt running the database above should now print `connection accepted from...`

![conn_accepted](https://user-images.githubusercontent.com/46408547/192593212-bd74b59c-2054-4d46-a347-06f1968b8a87.JPG)
## Usage
After the successful installation and running of the app from the last section, proceed to launch the app in the browser at [http://localhost:3000](http://localhost:3000) 

It will bring you to the home page, which is also the index page where you can view all the posted write-ups

Clicking on `NewPost` on the menu will bring a page to write and upload new contents

From the index page, clicking `Read More` will display the full content of the particular post. From there, one can click  the `Edit` and `Delete` button to update and delete the content respectfully.
## Technologies
Technologies used include HTML, CSS, SemanticUI, EJS templates, Node.js, Express.js, MongoDB, Mongoose
## Contribution guide
1. Open up a new issue, and describe the feature you want to contribute
 
2. Fork this repository. 

3. Clone it to your local machine, so you can open it in your prferred editor.

4. Create a new branch for your task, and add a descriptive branch name using the git command: `git checkout -b (branch name)`

5. After implementation, commit your changes with a descriptive commit message, the commit message should give an idea of the feature you worked on, use the git command: `git commit -m "commit message"`

6. Push changes to your forked repo with the new branch you created using the git command: `git push origin your-branch-name`

7. Create a pull request to the `develop` branch of this repository from your forked repo on github. The button is on the GUI

- Pro tip: It is possible that commits may have been merged to this repository, to avoid conflicts, fetch and merge from this repo on the GUI, then you can update your local machine by using the command: `git pull`
