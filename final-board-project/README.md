# Istanbul Bootcamp Final Project: The Board Project

In general, this open-ended project will involve working on an app that has a
concept of "boards" and "board items". It could be a to-do list, or it could be
something else; you may decide the purpose/function of this application. We are
excited to see what you think of. Some examples of things in similar categories
are:

- To-do list (you are not allowed to do this one)
- Brainstorm board
- [Kanban board](https://en.wikipedia.org/wiki/Kanban_board)
- Notetaking apps

## Learning objectives

- Connecting to a backend with Firebase
- Modeling your data
- Using React

## Code Requirements

- Only use function components (they were not taught on learn.co but they are
  what are used normally in practice). They are very similar to normal classes
- You will want to look into how **hooks** are used

## Data Requirements

In the requirements below, the terms are quite general, since they depend on
exactly what you planned out for your app.

- A user should be able to create a **board/list**. Conceptually, a board/list
  would contain many items that a user can add.
- For each board, a user should be able to add **board items/tasks**.
- Board items should have:
  - A due date
  - A title
  - A boolean flag for completd or not completed
  - An assignee (someone it is assigned to). It can be any random string that
    the user wants.
  - Anything else that you decide

## Functional requirements

- **Theme and framework**: Use one of
  [React-Bootstrap](https://react-bootstrap.github.io/), [Ant
  Design](https://ant.design/), Material Bootstrap, [Material UI (not recommended)](https://material-ui.com/).
  Install the package using `npm` or `yarn`.
- **Routing**: Use [react-router](https://reacttraining.com/react-router/) to
  navigate to different pages.
- **Sorting within a given board.** A user should be able to sort by title and
  due date, both ascending and descending.
- **Completed tasks.** Completed tasks should not be shown on the main boards.
  When a task is marked completed, you may decide how it will be shown, but it
  should be separated. For example, you could have a special board for completed
  tasks, or you could make a completely separate page that loads all the
  completed tasks.
- **Navbar**: There should be a navbar that has at least: "home page" (board
  overview), "about", and (optionally, see previous point) "completed."
- **Editing an existing task**: A user should be able to edit and save any
  properties of a task, such as title and due dates.
- **Deletion of board and board item**: A user should be able to delete any
  board or board item.
- **Toggle display type**: There should be a button that allows users to toggle
  between "list" and "board" views of all the boards. Hint: keep a state
  variable on the container that contains two possible values. Here is an
  example of what we mean by [board](./board-example.png) and
  [list](./list-example.png). List-view only has to be read-only

## Checkpoints

### Week 1

Two minute demo of:

- Creation and reading of a board in Firebase
- Creation and reading of a board item in Firebase

The user should be able to fill out forms to create a board and board item and
have it show up in the UI, no matter how it looks. No styling is required (I
encourage you to worry about styling later).

### Week 2

Two minute demo of:

- A working navbar with React routing
- Editing an existing board item in Firebase.

### Week 3

Completion of rest of the features.

# Appendix

Below, you'll find additional resources not directly related to the requirements
of the project.

## Planning

I highly recommend that you write out your "schema" before starting. A schema
means a list of keys (fields) that are present on each type of object. What
keys can a board have? What keys can a board item have? Any other objects
that you need to keep track of?

## Examples

There are tons of examples of such apps, even just a click away from here. You
may want to look into any of the following products or terms for inspiration.

- GitHub Boards
- Kanban boards
- Wunderlist
- Trello
- Asana

I'm intentionally not including any pictures as examples, I want you to use your
imagination and look around for inspiration.

## Reminders

- Please read this documentation
- Please read the React documentation for function components
- Please read the Firebase documentation
- Look at lots of example code when writing your app
- Work together with your partner, no one should be asymmetrically writing all
  of the code.

## Extra credit

- Add users and registration using Firebase. See [Firebase
  Auth](https://firebase.google.com/docs/auth). A user should be able to login,
  logout, access their own board, etc.
- Allow users to upload at least one image associated with an item.
- Allow users to rearrange the board via drag and drop (and persist the order in
  the backend!). Take a look at the
  [react-dnd](https://github.com/react-dnd/react-dnd) library.
