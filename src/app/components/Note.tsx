import { NoteType } from "../page";
import { formatDate } from "../page";

export default function Note({
  note
}:
{note: NoteType}
) {
  const {createdAt, body} = note
  return (
    <div className="card w-full shadow hover:shadow-lg bg-base-100 p-2 mb-2">
      {/* <div className="columns-2"> */}
      {/* <div>modified: {modifiedAt}</div> */}
      <div className="font-medium">{formatDate(createdAt)}</div>
      <div className="prose">{body}</div>
    </div>
  );
}

// shadow hover:shadow-lg
// border-4 