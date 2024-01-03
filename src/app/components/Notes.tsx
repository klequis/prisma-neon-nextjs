import { NoteType } from '../page'
import Note from './Note'

export default function Notes(
  { notes }: 
  {notes: NoteType[]}
) {
    return (
    <>
        {
            notes.map(n => {return <Note key={n.id} note={n} />})
        }
    </>
    )
}