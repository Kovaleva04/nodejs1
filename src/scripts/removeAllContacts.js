import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]));
    console.log('Дані успішно видалені з файлу.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
};

removeAllContacts();