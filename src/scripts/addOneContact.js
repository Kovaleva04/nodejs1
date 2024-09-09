import { generateContacts } from "./generateContacts.js";

export const addOneContact = async () => {
   generateContacts(1);
};

addOneContact();