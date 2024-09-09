import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import fs from 'node:fs/promises';

export const generateContacts = async (number) => {
    const fetchContacts = await readContacts();

    for(let i = 0; i < number; i++) {
        fetchContacts.push(createFakeContact());
    }

    await fs.writeFile(PATH_DB, JSON.stringify(fetchContacts), 'utf-8');
};

if (process.argv[1].includes('generateContacts.js') === true) {
    generateContacts(5);
}
