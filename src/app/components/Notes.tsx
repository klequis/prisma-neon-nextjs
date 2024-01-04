import { NoteType } from '../page'
import Note from './Note'



export default function Notes(
  { notes }: 
  {notes: NoteType[]}
) {
    return (
    <>
        {
            notes.map((note) => (
                <Note key={note.id} note={note} />
            )) 
        }
    </>
    )
}