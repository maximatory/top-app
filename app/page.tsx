'use client'
import Button from "@/components/Button/Button";
import Htag from "@/components/Htag/Htag";
import P from '@/components/P/P';
import Rating from "@/components/Rating/Rating";
import Tag from "@/components/Tag/Tag";
import { useState } from "react";

export default function Home() {
  const [rating, setRating] = useState<number>(4)
  return (
    <>
      <Htag tag='h2'>Hello</Htag>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button appearance="primary" arrow="right">Arrow</Button>
      <Button appearance="ghost" arrow="down">Arrow</Button>
      <P size="l">Большой</P>
      <P size="m">Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s" color="red">Small red</Tag>
      <Tag size="m" color="green">Medium green</Tag>
      <Tag size="s" color="ghost" href="#">Small ghost</Tag>
      <Tag size="s" color="primary">Medium primary</Tag>
      <Tag color="grey">Medium grey</Tag>

      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}
