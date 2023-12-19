import { ContactType } from "../page";

export function ItemContact({ contact }: { contact: ContactType }) {
  return (
    <div>
      <div>Contact Name: {contact.name}</div>
      {contact.phones.map((p) => {
        return (
          <div key={p.id}>
            {p.phone} {p.phoneType}
          </div>
        );
      })}
      {/* <div>{contact.}</div> */}
    </div>
  );
}
