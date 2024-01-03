import { ItemDatesType, formatDate } from "../page";


interface Props {
  createdAt: Date;
  modifiedAt: Date;
  dueAt: Date | null;
  completedAt: Date | null;
}

export function ItemDates({
  itemDates
}: {itemDates: ItemDatesType}) {
  const {dueAt, completedAt, modifiedAt, createdAt} = itemDates
  return (
    <>
      <div className="columns-2 text-sm">
        <div>Due: {formatDate(dueAt)}</div>
        <div>Status: {formatDate(completedAt)}</div>
        <div>Created: {formatDate(createdAt)}</div>
        <div>Modified: {formatDate(modifiedAt)}</div>
      </div>
    </>
  );
}
