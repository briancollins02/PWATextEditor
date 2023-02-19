import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('putDb function');
  const jateDb = await openDB('jate', 1);
  const transact = jateDb.transaction('jate', 'readwrite');
  const store = transact.objectStore('jate');
  const req = store.put({ id: 1, value: content });
  const res = await req;
  console.log('data saved to db', res.value);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('getDb function');
  const jateDb = await openDB('jate', 1);
  const transact = jateDb.transaction('jate', 'readonly');
  const store = transact.objectStore('jate');
  const req = store.put({ id: 1, value: content });
  const res = await req;
  res ? console.log('data loaded!', res.value) : console.log('data not found');
  return res?.value;
};

initdb();
