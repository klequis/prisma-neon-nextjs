import { Item } from "./components/Item";
import { format } from "date-fns";
import prismaClient from "../lib/prisma";

export interface PhoneType {
  id: number;
  number: String;
  type: String;
  contactId: number;
}

export interface ContactType {
  id: number;
  name: string;
  phones: PhoneType[];
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
  dueAt: Date | null;
  completedAt: Date | null;
  createdAt: Date;
  modifiedAt: Date;
}

export interface FullItemType {
  id: number;
  title: string;
  itemDates: ItemDatesType;
  contacts: ContactType[];
  notes: NoteType[];
}
[];

export function formatDate(date: Date | null | undefined) {
  if (date === null || date === undefined) {
    return "none";
  }
  return format(date, "dd/LL/yyyy hh:mm a");
}

const fetchItems = async () => {
  const i = await prismaClient.item.findMany({
    include: {
      itemDates: {},
      contacts: {
        include: {
          phones: {},
        },
      },
      notes: {},
    },
  });
  return i;
};

export default async function Home() {
  const items = await fetchItems();
  return (
    <main className="container mx-auto md:mx-auto">
      <div className="join join-vertical w-full">
        {items.map((i: FullItemType) => (
          <Item key={i.id} fullItem={i} />
        ))}
      </div>
    </main>
  );
}
