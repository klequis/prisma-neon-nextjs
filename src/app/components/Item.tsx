import { Item as PrismaItem } from '@prisma/client'
import { format } from 'date-fns'
import styles from './Item.module.css'
import { ItemHeader } from './ItemHeader'

export function Item({ item }: { item: PrismaItem }) {
  return (
    <div key={item.id} className={styles.item}>
      <ItemHeader
        title={item.title}
        createdAt={item.createdAt}
        modifiedAt={(item.modifiedAt)}
        dueAt={item.dueAt}
        completedAt={item.completedAt}
      />
    </div>
  )
}
