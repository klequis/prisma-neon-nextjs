import { PrismaClient, Note, Contact, Item as PrismaItem } from '@prisma/client'
import { Item } from './components/Item'

export interface ItemType {
  id: number
  title: string
  notes: Note[]
  contacts: Contact[]
  dueAt?: Date
  completeddueAt?: Date
  createdAt: Date
  modifiedAt: Date
}

const prisma = new PrismaClient()

const fetchItems = async (): Promise<PrismaItem[]> => {
  const items = await prisma.item.findMany({})
  return items
}

export default async function Home() {
  // console.log('items', items)
  const items = await fetchItems()
  return (
    <main>
      <button className="btn btn-primary">Button</button>

      {items.map((i: PrismaItem) => {
        return <Item item={i} key={i.id} />
      })}
    </main>
  )
}

/*

Missing "key" prop for element in iteratoreslintreact/jsx-key
Type '{ item: { id: number; title: string; dueAt: Date | null; completeddueAt: Date | null; createdAt: Date; modifiedAt: Date; }; }' is not assignable to type 'IntrinsicAttributes & { id: number; title: string; dueAt: Date | null; completeddueAt: Date | null; createdAt: Date; modifiedAt: Date; }'.
  Property 'item' does not exist on type 'IntrinsicAttributes & { id: number; title: string; dueAt: Date | null; completeddueAt: Date | null; createdAt: Date; modifiedAt: Date; }'.ts(2322)
*/
