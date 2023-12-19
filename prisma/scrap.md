Type '({ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; } & { ...; })[]' is not assignable to type 'FullItemType[]'.
  Type '{ notes: { id: number; body: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; contacts: { id: number; name: string; item_id: number; createdAt: Date; modifiedAt: Date; }[]; } & { ...; }' is not assignable to type 'FullItemType'.
    Types of property 'dueAt' are incompatible.
      Type 'Date | null' is not assignable to type 'Date | undefined'.
        Type 'null' is not assignable to type 'Date | undefined'