import { openDB } from 'idb';

const initdb = async () =>

// TODO: Add a comment explaining what this method does
//creates a new database named 'todos' which will be useing version 1 od the db
  openDB('todos', 1, {
    // TODO: Add a comment explaining the functionality of this method:
    //add our database schema if it has not already been initialized
    upgrade(db) {
      if (db.objectStoreNames.contains('todos')) {
        console.log('todos database already exists');
        return;
      }
      // TODO: Add a comment explaining what we're doing with the object store:
      // create a new object store for the data and give it an key name of 'id' which needs to increment automatically.
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
      console.log('todos database created');
    },
  });

initdb();
