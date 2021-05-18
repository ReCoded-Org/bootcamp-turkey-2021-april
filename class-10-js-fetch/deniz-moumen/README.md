GitHub Search App
GitHub API

You will be using the GitHub API for this project. You can view documentation for this API here. This is an open API: no API key or authentication is required for the endpoints we will be using.

Notice the GitHub API documentation includes the following excerpt. They require you to add a custom header to your requests.

    By default, all requests to https://api.github.com receive the v3 version of the REST API. We encourage you to explicitly request this version via the Accept header. 

Accept: application/vnd.github.v3+json

User Search Endpoint

You can search for users matching a certain name. For example, if we wanted to find all users name octocat, we would make a GET request to https://api.github.com/search/users?q=octocat. To view the response, you can copy and paste that URL into your browser.

This endpoint is rate limited. This means the API will stop returning data if you make more than 10 requests per minute.
User Repos Endpoint

You can find all the public repositories for a user using this endpoint. For example if we wanted to find all the repositories for a user with GitHub username octocat, we would make a GET request to https://api.github.com/users/octocat/repos. To view the response, you can copy and paste that URL into your browser.

This endpoint is rate limited. This endpoint will stop returning data if you make more than 60 requests in an hour.
Deliverables

You are going to build a JavaScript application which searches GitHub for users by name and displays the results on the screen. Clicking on a specific user will show all the repositories for that user.

    The index.html file has a form with a search input. When the form is submitted, it should take the value of the input and search GitHub for user matches using the User Search Endpoint.
    Using the results of the search, display information about the users to the page. (You might include showing their username, avatar and a link to their profile.)
    Clicking on one of these users should send a request to the User Repos Endpoint and return data about all the repositories for that user.
    Using the response from the Users Repos Endpoint, display all the repositories for that user on the page.

Bonus

    Toggle the search bar between searching for users by keyword and searching for repos by keyword by adding an extra button. Hint: you can use the same search bar for this, but you may need to create a variable which stores what the current search type is (user or repo). The endpoint to search repositories by keyword is here.
