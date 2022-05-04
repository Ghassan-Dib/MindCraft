import { Contact } from '../constants/contactInfo';
import { Context } from '../constants/context';

export const contacts = (parent: Contact, args: Contact, context: Context) => {
  return context.prisma.contactUs.findMany();
};
