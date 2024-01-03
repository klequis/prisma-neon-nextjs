

const x = ({ 
    notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[];
    notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; 

    contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; })[]
    contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; })[]

const y = ({ 
    notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; 
    contacts: ({ phones: { id: number; number: string; type: string; contactId: number; }[]; } & { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; })[]; }