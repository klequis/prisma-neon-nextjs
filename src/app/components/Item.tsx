import { FullItemType } from "../page";
import Contacts from "./Contacts";
import { ItemDates } from "./ItemDates";
import Notes from "./Notes";

export function Item({ fullItem }: { fullItem: FullItemType }) {
  // const itemHeaderClick = () => {
  //   console.log("clicked");
  //   // fetch body
  // };
  // console.log('fullItem', fullItem)
  const { title, itemDates, contacts, notes } = fullItem;
  console.log('itemDates', itemDates)
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-200">
      <input type="radio" name="note-accordion" value="id1" />
      <div className="collapse-title text-xl font-medium">
        {title}
        <ItemDates itemDates={itemDates} />
      </div>
      <div className="collapse-content">
        <Contacts contacts={contacts}/>
        <Notes notes={notes} />
      </div>
    </div>
  )
}
