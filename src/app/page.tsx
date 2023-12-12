import { PrismaClient, Note, Contact, Item as PrismaItem } from '@prisma/client'
import { Item } from './components/Item'

export interface ItemType {
  id: number
  title: string
  notes: Note[]
  contacts: Contact[]
  due_at?: Date
  completed_at?: Date
  created_at: Date
  modified_at: Date
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
      {items.map((i: PrismaItem) => {
        return <Item item={i} key={i.id} />
      })}
    </main>
  )
}

/*

Missing "key" prop for element in iteratoreslintreact/jsx-key
Type '{ item: { id: number; title: string; due_at: Date | null; completed_at: Date | null; created_at: Date; modified_at: Date; }; }' is not assignable to type 'IntrinsicAttributes & { id: number; title: string; due_at: Date | null; completed_at: Date | null; created_at: Date; modified_at: Date; }'.
  Property 'item' does not exist on type 'IntrinsicAttributes & { id: number; title: string; due_at: Date | null; completed_at: Date | null; created_at: Date; modified_at: Date; }'.ts(2322)
*/
