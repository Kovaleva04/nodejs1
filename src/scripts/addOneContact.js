import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let existingData = [];

  try {
    const fileData = await fs.readFile(PATH_DB, 'utf8');
    existingData = JSON.parse(fileData);
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error('Помилка читання файлу:', err);
      return;
    }
  }

  const contact = createFakeContact();
  existingData.push(contact);

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(existingData, null, 2));
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

addOneContact();