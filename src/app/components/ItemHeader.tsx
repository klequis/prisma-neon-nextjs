import { format } from 'date-fns'
import styles from './ItemHeader.module.css'

function formatDate(date: Date | null) {
    if (date === null) {
      return 'none'
    }
    return format(date, 'dd/LL/yyyy hh:mm a')
  }

interface Props {
    title: string
    createdAt: Date
    modifiedAt: Date
    dueAt: Date | null
    completedAt: Date | null
}

export function ItemHeader(props: Props ) {
    return (
    <div className={styles.item}>
      <h1>{props.title}</h1>
      <div>
        <div className={styles.headerStatusRow}>
          <div className={styles.headerStatusItem}>Created: {formatDate(props.createdAt)}</div>
          <div className={styles.headerStatusItem}>Modified: {formatDate(props.modifiedAt)}</div>
        </div>
        <div className={styles.headerStatusRow}>
          <div className={styles.headerStatusItem}>Due: {formatDate(props.dueAt)}</div>
          <div className={styles.headerStatusItem}>Completed: {formatDate(props.completedAt)}</div>
        </div>
      </div>
    </div>
    )
}