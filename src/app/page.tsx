import {
  PrismaClient,
  Note,
  Contact,
  Item as PrismaItem,
} from "@prisma/client";
import { Item } from "./components/Item";
import { format } from 'date-fns'

export function formatDate(date: Date | null | undefined) {
  if (date === null || date === undefined) {
    return "none";
  }
  return format(date, "dd/LL/yyyy hh:mm a");
}

export interface ItemType {
  id: number;
  title: string;
  notes: Note[];
  contacts: Contact[];
  dueAt?: Date | null;
  completedAt?: Date | null;
  createdAt: Date;
  modifiedAt: Date;
}

export interface ContactType {
  id: number;
  name: string;
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

export interface FullItemType {
    id: number,
    title: string,
    dueAt?: Date,
    completedAt?: Date,
    createdAt: Date,
    modifiedAt: Date,
    contacts: {
      id: number;
      name: string;
      item_id: number;
      createdAt: Date;
      modifiedAt: Date;
    }[]
    notes: {
      id: number;
      body: string;
      item_id: number;
      createdAt: Date;
      modifiedAt: Date;
    }[]
  
}[]

const prisma = new PrismaClient();

const fetchItems = async (): Promise<PrismaItem[]> => {
  
  const i = await prisma.item.findMany({
    // select: {
    //   dueAt: true
    // }
    include: {
      contacts: {
        // include: {
        //   phones: {}
        // }
      },
      notes: {}
    }
  })
  // console.log("items", items);
  // const a = items[0]
  // console.log('a', a)
  // items.forEach(x => console.log(typeof x))
  return i;
};



export default async function Home() {
  // console.log('items', items)
  const items = await fetchItems();
  return (
    <main className="container mx-auto">
      <div className="join join-vertical w-full">
        {/* <h1>dueAt: {items[0].dueAt?.toString()}</h1> */}
        {items.map((i: PrismaItem) => {
          return <Item item={i} key={i.id} />;
        })}
      </div>
    </main>
  );
}

/*

Missing "key" prop for element in iteratoreslintreact/jsx-key
Type '{ item: { id: number; title: string; dueAt: Date | null; completeddueAt: Date | null; createdAt: Date; modifiedAt: Date; }; }' is not assignable to type 'IntrinsicAttributes & { id: number; title: string; dueAt: Date | null; completeddueAt: Date | null; createdAt: Date; modifiedAt: Date; }'.
  Property 'item' does not exist on type 'IntrinsicAttributes & { id: number; title: string; dueAt: Date | null; completeddueAt: Date | null; createdAt: Date; modifiedAt: Date; }'.ts(2322)
*/
