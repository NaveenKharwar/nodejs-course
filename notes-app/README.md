# Note App

A simple command-line note-taking application using Node.js.

## Installation

1. Clone the repository:

```
git clone https://github.com/naveenkharwar/nodejs-course.git
```

2. Install dependencies:

```
cd nodejs-course/notes-app
npm install
```

## Usage

### Add a Note

To add a new note, use the following command:

```
node app.js add --title="Your note title" --body="Your note body"
```

This command will add a new note with the specified title and body to the notes list.

### Remove a Note

To remove a note, use the following command:

```
node app.js remove --title="Your note title"
```

This command will find the note with the given title and remove the entire note from the notes list.

### List Notes

To list all the note titles, use the following command:

```
node app.js list
```

This command will display the titles of all the notes currently saved.

### Read a Note

To read the contents of a specific note, use the following command:

```
node app.js read --title="Your note title"
```

This command will find the note with the given title and display its title and body.

## Examples

- Adding a note:

```
node app.js add --title="Shopping List" --body="Milk, Eggs, Bread"
```

- Removing a note:

```
node app.js remove --title="Shopping List"
```

- Listing notes:

```
node app.js list
```

- Reading a note:

```
node app.js read --title="Shopping List"
```

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README further to include any specific instructions, guidelines, or additional sections that you think would be beneficial for your note app. The goal is to provide clear and concise information to users about how to use and interact with your application. Happy coding!