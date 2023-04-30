const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts");

const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);
    // break;

    case "getById":
      const oneContact = await getContactById(id);
      return console.table(oneContact);
    // break;

    case "add":
      const newContact = await addContact(name, email, phone);
      return console.table(newContact);
    // break;

    case "remove":
      const deletedContact = await removeContact(id);
      return console.table(deletedContact);
    // break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);
