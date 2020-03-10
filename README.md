# notes-app

This is a CLI tool for taking notes. </br>

The notes are stored locally in  ***notes.json***.

### Usage

##### Adding a note: 
`node app.js add --title 'Matan's address' --body 'Shprinzak street, tel aviv'` </br>
##### Reading a note:
`node app.js read --title 'Matan's address'`
##### Remove a note:
`node app.js remove --title 'Matan's address'`
##### List all stored notes:
`node app.js list`

### Help
##### List all supported commands
`node app.js --help`
##### See all optional/required arguments for a specific command
`node app.js [command] --help`
