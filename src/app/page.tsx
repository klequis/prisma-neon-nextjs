import {
  PrismaClient,
  Note,
  Contact,
  Item as PrismaItem,
} from "@prisma/client";
import { Item } from "./components/Item";

const prisma = new PrismaClient();

export interface ItemType {
  id: number;
  title: string;
  notes: Note[];
  contacts: Contact[];
  dueAt?: Date;
  completedAt?: Date;
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

export interface ContactType {
  id: number;
  name: string;
  item_id: number;
  createdAt: Date;
  modifiedAt: Date;
}

interface ItemContactsNotesType {
  item: ItemType;
  contacts: ContactType[];
  notes: NoteType[];
}
[];

const fetchItems = async (): Promise<ItemContactsNotesType[]> => {
  // const items = await prisma.item.findMany({
  //   select: {
  //     id: true,
  //     title: true,
  //     notes: true,
  //     contacts: true,
  //     dueAt: true,
  //     completedAt: true,
  //     createdAt: true,
  //     modifiedAt: true,
  //     contacts: {},
  //     notes: {},
  //   },
  // });
  const items = await prisma.item.findMany({
    include: {
      contacts: {},
      notes: {}
    }
  })
  // console.log("items", items);
  items.forEach(x => console.log(x))
  return items;
};

export default async function Home() {
  // console.log('items', items)
  const items = await fetchItems();
  return (
    <main className="container mx-auto">
      <div className="join join-vertical w-full">
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
