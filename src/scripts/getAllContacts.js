import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
  let existingData = [];

  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    return (existingData = JSON.parse(fileData));
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Помилка читання файлу:', err);
      return;
    }
  }
};

console.log(await getAllContacts());