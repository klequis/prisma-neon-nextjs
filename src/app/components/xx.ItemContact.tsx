import { ContactType } from "../page";
import { ContactPhone } from "./Contact";
// const border = style={{border: '1px solid black'}}
export function ItemContact({ contact }: { contact: ContactType }) {
  return (
    <div className="flex flex-row">
      <div>{contact.name}</div>
      <div className="flex flex-col w-full" >

      
      {
        contact.phones.map((p) => {
          return (
            <ContactPhone  key={p.id}  phone={p} />
          )
        })
      }
      </div>
    </div>
  );
}
