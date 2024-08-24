import { useData } from "vike-react/useData";
import type { Data } from "./+data.js";
import { Table } from "antd";

export default function Page() {
  const movies = useData<Data>();

  const columns = [
    { key: "id", dataIndex: "id", title: "Id" },
    {
      key: "title",
      dataIndex: "title",
      title: "Title",
      render: (title, record) => (
        <li key={record.id}>
          <a href={`/star-wars/${record.id}`}>{title}</a> ({record.release_date}
          )
        </li>
      ),
    },
    { key: "release_date", dataIndex: "release_date", title: "Release date" },
  ];

  return (
    <>
      <h1>Star Wars Movies</h1>
      <Table
        columns={columns}
        dataSource={movies}
        rowKey={(r) => r.title}
        footer={() => (
          <>
            Source:{" "}
            <a href="https://brillout.github.io/star-wars">
              brillout.github.io/star-wars
            </a>
            .
          </>
        )}
      />
    </>
  );
}
