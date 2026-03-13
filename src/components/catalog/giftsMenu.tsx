"use client";

import { useState } from "react";
import type { Gift } from "@/types";
import GiftsList from "@/components/giftsList";
import GiftsCategorySelector from "@/components/catalog/giftsCategorySelector";

interface Props {
  gifts: Gift[];
}

export default function GiftsMenu({ gifts }: Props) {
  const [selectedCategory, setSelectedCategory] =
    useState<Gift["category"]>("ROMANTIC");

  return (
    <>
      <GiftsCategorySelector
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <GiftsList selectedCategory={selectedCategory} gifts={gifts} />
    </>
  );
}
