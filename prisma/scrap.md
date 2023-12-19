

```html
<div 
  className="collapse collapse-arrow join-item border border-base-300"  
>
  <input type="radio" name="note-accordion" value="id1"/>
  <div className="collapse-title text-xl font-medium">
    <h1>TITLE GOES HERE</h1>
    <!-- DATES START HERE -->
    <div className={styles.headerStatusRow}>
      <div className={styles.headerStatusItem}>
        Created: {formatDate(props.createdAt)}
      </div>
      <div className={styles.headerStatusItem}>
        Modified: {formatDate(props.modifiedAt)}
      </div>
    </div>
    <div className={styles.headerStatusRow}>
      <div className={styles.headerStatusItem}>
        Due: {formatDate(props.dueAt)}
      </div>
      <div className={styles.headerStatusItem}>
        Completed: {formatDate(props.completedAt)}
      </div>
    </div>
    <!-- DATES END HERE -->
  </div>
  <div className="collapse-content">
    <p>NOTES GO HERE</p>
  </div>
  
</div>
```












Type '({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; } & { ...; })[]' is not assignable to type 'FullItemType[]'.
  Type '{ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; } & { ...; }' is not assignable to type 'FullItemType'.
    Types of property 'dueAt' are incompatible.
      Type 'Date | null' is not assignable to type 'Date | undefined'.
        Type 'null' is not assignable to type 'Date | undefined'