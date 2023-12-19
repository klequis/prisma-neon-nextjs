"use client"
import { useState } from "react";
import { PrismaClient, Item as PrismaItem } from "@prisma/client";
import styles from "./Item.module.css";
import { ItemHeader } from "./ItemHeader";
import { FullItemType } from "../page";
import { ItemContact } from "./ItemContact";


export function Item({ fullItem }: { fullItem: FullItemType }) {
  const itemHeaderClick = () => {
    console.log('clicked')
    // fetch body

  }
  const {contacts, notes} = fullItem
  return (
    <div 
      key={fullItem.id} 
      className={styles.item}
      onClick={itemHeaderClick}
    >
      <ItemHeader
        title={fullItem.title}
        createdAt={fullItem.createdAt}
        modifiedAt={fullItem.modifiedAt}
        dueAt={fullItem.dueAt}
        completedAt={fullItem.completedAt}
        // onClick={itemHeaderClick}
      />
      {contacts.map(c => {
        return (
          <ItemContact key={c.id} contact={c}  />
        )
      })}
      
    </div>
      
  );  
}
