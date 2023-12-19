"use client";
import { useState } from "react";
import { PrismaClient, Item as PrismaItem } from "@prisma/client";
import styles from "./Item.module.css";
import { ItemHeader } from "./ItemHeader";
import { FullItemType } from "../page";
import { ItemContact } from "./ItemContact";
import { ItemDates } from "./ItemDates";

export function Item({ fullItem }: { fullItem: FullItemType }) {
  const itemHeaderClick = () => {
    console.log("clicked");
    // fetch body
  };
  const { contacts, notes } = fullItem;
  return (
    <>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="note-accordion" value="id1" />
        <div className="collapse-title text-xl font-medium">
          <h1>{fullItem.title}</h1>
          {/* <!-- DATES START HERE --> */}
          <ItemDates
            createdAt={fullItem.createdAt}
            modifiedAt={fullItem.modifiedAt}
            dueAt={fullItem.dueAt}
            completedAt={fullItem.completedAt}
          />
          {/* <!-- DATES END HERE --> */}
        </div>
        <div className="collapse-content">
          <p>CONTACTS AND NOTES GO HERE</p>
          {contacts.map((c) => {
            return <ItemContact key={c.id} contact={c} />;
          })}
        </div>
      </div>
    </>
  );
}
