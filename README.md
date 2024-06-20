# AngularNotesApp

AngularNotesApp is a full-stack web application built with Angular for the frontend and Node.js with Express for the backend. It allows users to create, read, update, and delete notes.

### Screenshot

![Component Screenshot](./Frontend/NotesApp/src/assets/screenshot.PNG)

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (v12 or later)
- Angular CLI
- SQL Server (or any other compatible database)

## Backend Setup

1. Navigate to the Backend directory:
    ```sh
    cd Backend
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the Backend directory and add the following environment variables:
    ```plaintext
    DB_USER=your_database_username
    DB_PWD=your_database_password
    DB_SERVER=your_database_server
    DB_NAME=your_database_name
    ```

   Replace the placeholders with your actual database credentials.

4. Start the backend server:
    ```sh
    npm start
    ```

   The backend server will run on [http://localhost:3003](http://localhost:3003).

## Frontend Setup

1. Navigate to the project root directory:
    ```sh
    cd ../Frontend/AngularNotesApp
    ```

2. Install the required dependencies:
    ```sh
    npm install
    ```

3. Start the Angular development server:
    ```sh
    ng serve -o
    ```

   The frontend application will be available at [http://localhost:4200](http://localhost:4200).

## Usage

Once both the backend and frontend are running, you can access the AngularNotesApp through your web browser at [http://localhost:4200](http://localhost:4200).

The application provides the following functionality:

- Create a new note
- View a list of all notes
- View details of a specific note
- Delete a note

## Technologies Used

### Backend

- Node.js
- Express.js
- mssql (Microsoft SQL Server client)

### Frontend

- Angular
- TypeScript
- HTML
- CSS
