import {
  PrismaClient,
  Item as PrismaItem,
} from "@prisma/client";
import { Item } from "./components/Item";
import { format } from 'date-fns'
import { ItemDates } from './components/ItemDates';

export function formatDate(date: Date | null | undefined) {
  if (date === null || date === undefined) {
    return "none";
  }
  return format(date, "dd/LL/yyyy hh:mm a");
}

const prisma = new PrismaClient();

/*
  I took away the return type of fetchItems and
  now the error on `return i` is gone but there is
  a new error in `Home()`
*/
const fetchItems = async () => {
  // console.log('zzz', FullItemType)
  const i = await prisma.item.findMany({
    include: {
      dates: {},
      contacts: {
        include: {
          phones: {}
        }
      },
      notes: {}
    }
  })
  console.log(i)
  return i;
};

export interface PhoneType {
  id: number
  phoneNumber: String
  phoneType: String
  contactId: number
}

export interface ContactType {
  id: number;
  name: string;
  phones: PhoneType[]
  item_id: number;
  createdAt: Date;
  modifiedAt: Date;
}

export interface NoteType {
  id: number;
  body: string;
  item_id: number;
  createdAt: Date;
  modifiedAt: Date;
}

export interface ItemDatesType {
  dueAt: Date | null,
  completedAt: Date | null,
  createdAt: Date,
  modifiedAt: Date,
}

export interface FullItemType {
  id: number,
  title: string,
  itemDates: ItemDatesType
  contacts: ContactType[]
  notes: NoteType[]
}[]

export default async function Home() {
  const items = await fetchItems();
  return (
    <main className="container mx-auto md:mx-auto">
      <div className="join join-vertical w-full">
        {/* <h1>dueAt: {items[0].dueAt?.toString()}</h1> */}
        {items.map((i: FullItemType) => {
          return <Item 
                    key={i.id}
                    fullItem={i}
                    // contacts
                 />;
        })}
      </div>
    </main>
  );
}