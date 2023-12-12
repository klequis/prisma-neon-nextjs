import { Item as PrismaItem } from '@prisma/client'
import { format } from 'date-fns'
import { ItemType } from '../page'

const dateStyle = {
  display: 'flex',
}

function formatDate(date: Date | null) {
  if (date === null) {
    return 'none'
  }
  return format(date, 'dd/LL/yyyy hh:mm a')
}

export function Item({ item }: { item: PrismaItem }) {
  return (
    <div key={item.id}>
      <h1>{item.title}</h1>
      <div>
        <div>Created: {formatDate(item.created_at)}</div>
        <div>Modified: {formatDate(item.created_at)}</div>
        <div>Due: {formatDate(item.due_at)}</div>
        <div>Completed: {formatDate(item.completed_at)}</div>
      </div>
    </div>
  )
}
