import React from "react";
import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";
import { Descriptions } from "antd";
import type { DescriptionsProps } from "antd";

export default function Page() {
  const movie = useData<Data>();
  const items: DescriptionsProps["items"] = [
    {
      key: "1",
      label: "Title",
      children: movie.title,
    },
    {
      key: "2",
      label: "Director",
      children: movie.director,
    },
    {
      key: "3",
      label: "Producer",
      children: movie.producer,
    },
  ];
  return (
    <Descriptions title="Movie details" bordered items={items} column={1} />
  );
}
