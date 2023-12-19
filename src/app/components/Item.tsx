"use client"
import { useState } from "react";
import { PrismaClient, Item as PrismaItem } from "@prisma/client";
import styles from "./Item.module.css";
import { ItemHeader } from "./ItemHeader";
import { FullItemType, formatDate } from "../page";


export function Item({ item }: { item: PrismaItem }) {
  const itemHeaderClick = () => {
    console.log('clicked')
    // fetch body

  }
  return (
    <div 
      key={item.id} 
      className={styles.item}
      onClick={itemHeaderClick}
    >
      <ItemHeader
        title={item.title}
        createdAt={item.createdAt}
        modifiedAt={item.modifiedAt}
        dueAt={item.dueAt}
        completedAt={item.completedAt}
        // onClick={itemHeaderClick}
      />
    </div>
      
  );  
}
