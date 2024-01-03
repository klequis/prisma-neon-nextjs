import { NoteType } from "../page";
import { formatDate } from "../page";

export function ItemNote({ note }: { note: NoteType }) {
  const { body, createdAt, modifiedAt } = note;
  return (
    <div>
      <div>createdAt: {formatDate(createdAt)}</div>
      <div>modifiedAt: {formatDate(modifiedAt)}</div>
      <div>{body}</div>
    </div>
  );
}
