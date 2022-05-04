import { Contact } from '../constants/contactInfo';
import { Context } from '../constants/context';

const createContact = async (
  parent: Contact,
  { name, email, message }: Contact,
  context: Context
) => {
  const contact = await context.prisma.contactUs.create({
    data: {
      name,
      email,
      message
    }
  });
  return contact;
};

const updateContact = async (
  parent: Contact,
  { name, email, message }: Contact,
  context: Context
) => {
  const updatedContact = await context.prisma.contactUs.update({
    where: { email },
    data: {
      name,
      email,
      message
    }
  });
  return updatedContact;
};

const deleteContact = async (parent: Contact, { email }: Contact, context: Context) => {
  await context.prisma.contactUs.delete({ where: { email } });
  return 'contact deleted!';
};

export { createContact, deleteContact, updateContact };
