```ts
model Category {
  id                 Int                @id @default(autoincrement()) @map("category_id")
  name               String?            @db.VarChar(256)
  post_in_categories PostInCategories[]

  @@map("categories")
}

model PostInCategories {
  post_id     Int
  category_id Int
  categories  Category @relation(fields: [category_id], references: [id], onDelete: NoAction, onUpdate: NoAction)
  posts       Post     @relation(fields: [post_id], references: [id], onDelete: NoAction, onUpdate: NoAction)

  @@unique([post_id, category_id], map: "post_id_category_id_unique")
  @@map("post_in_categories")
}

model Post {
  id                 Int                @id @default(autoincrement()) @map("post_id")
  createdAt         DateTime?          @default(now()) @db.Timestamptz(6)
  title              String             @db.VarChar(256)
  content            String?
  author_id          Int?
  users              User?              @relation(fields: [author_id], references: [id], onDelete: NoAction, onUpdate: NoAction)
  post_in_categories PostInCategories[]

  @@map("posts")
}

model Profile {
  id      Int     @id @default(autoincrement()) @map("profile_id")
  bio     String?
  user_id Int     @unique
  users   User    @relation(fields: [user_id], references: [id], onDelete: NoAction, onUpdate: NoAction)

  @@map("profiles")
}

model User {
  id       Int      @id @default(autoincrement()) @map("user_id")
  name     String?  @db.VarChar(256)
  email    String   @unique @db.VarChar(256)
  posts    Post[]
  profiles Profile?

  @@map("users")
}
```