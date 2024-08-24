import { Button, Form, Input } from "antd";
import React, { useState } from "react";

export function TodoList({
  initialTodoItems,
}: {
  initialTodoItems: { text: string }[];
}) {
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [newTodo, setNewTodo] = useState("");

  const [form] = Form.useForm();

  const submit = () => {
    // Optimistic UI update
    setTodoItems((prev) => [...prev, { text: newTodo }]);
    form.resetFields();
  };

  return (
    <>
      <ul>
        {todoItems.map((todoItem) => (
          <li key={todoItem.text}>{todoItem.text}</li>
        ))}
      </ul>
      <div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={submit}
          autoComplete="off"
          form={form}
        >
          <Form.Item
            name="newToDo"
            initialValue=""
            onChange={(ev) => setNewTodo(ev.target.value)}
          >
            <Input type="text" value={newTodo} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Add to-do
          </Button>
        </Form>
      </div>
    </>
  );
}
