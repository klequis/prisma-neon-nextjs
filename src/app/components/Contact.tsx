import { ContactType, PhoneType } from "../page";

export default function Contact({ contact }: { contact: ContactType }) {
  const { name, phones } = contact;
  console.log('contact', contact)
  return (
    <div className="mr-1 bg-base-300 p-2">
      <h3 className="text-lg font-semibold">{name}</h3>
      {phones.map((p) => {
        const {number, type} = p
        return (
          <p key={p.id} className="text-sm">
            {number} - {type}
          </p>
        );
      })}
    </div>
  );
}
