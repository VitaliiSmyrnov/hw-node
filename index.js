const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.log(allContacts);
    // break;

    case "getById":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    // break;

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.log(newContact);
    // break;

    case "remove":
      const deletedContact = await removeContact(id);
      return console.log(deletedContact);
    // break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
