Conversion of type '

({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; })[]; } & { ...; })[]' 

to type 'FullItemType' may be a mistake because neither type sufficiently overlaps with the other. 

If this was intentional, convert the expression to 'unknown' first.

Type 
'({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; })[]; } & { ...; })[]' 

is missing the following properties from type 'FullItemType': 
- id, 
- title, 
- itemDates, 
- contacts, 
- notes


const x = ({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; })[]; } & { ...; })[]

const y = ({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; })[]; } & { ...; })[]

```ts
one: ({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt:
two: ({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: 

one: Date; })[]; } & { ...; })[]' 
two: Date; })[]; } & { ...; })[]' 
```

