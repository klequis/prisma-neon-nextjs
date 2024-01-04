import Contact from "./Contact";
import { ContactType } from "../page";

export default function Contacts({contacts}: {contacts: ContactType[]}) {
  // console.log('contacts', contacts)
    return (
        <div className="flex mb-3">
          {contacts.map(c => {
            return <Contact key={c.id} contact={c}/>
          })}
        </div>
    )
}