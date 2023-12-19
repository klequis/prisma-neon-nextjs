import { formatDate } from "../page"
import styles from "./ItemHeader.module.css";

interface Props {
    createdAt: Date
    modifiedAt: Date
    dueAt: Date | null
    completedAt: Date | null
}

export function ItemDates({createdAt, modifiedAt, dueAt, completedAt}: Props) {
    return (
        <>
        <div className={styles.headerStatusRow}>
          <div className={styles.headerStatusItem}>
            Created: {formatDate(createdAt)}
          </div>
          <div className={styles.headerStatusItem}>
            Modified: {formatDate(modifiedAt)}
          </div>
        </div>
        <div className={styles.headerStatusRow}>
          <div className={styles.headerStatusItem}>
            Due: {formatDate(dueAt)}
          </div>
          <div className={styles.headerStatusItem}>
            Completed: {formatDate(completedAt)}
          </div>
        </div>
      </>
    )
}