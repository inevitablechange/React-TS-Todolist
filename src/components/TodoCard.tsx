import { Button, Input, Flex, Text } from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { FiEdit3, FiTrash, FiX } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
  todos: ITodo[];
  setTodos: Dispatch<SetStateAction<ITodo[]>>;
}

const TodoCard: FC<TodoCardProps> = ({ todo, todos, setTodos }) => {
  const [isUpdateOpen, setIsUpdateOpen] = useState<boolean>(false);
  const [content, setContent] = useState<string>(todo.content);

  const onClickIsDone = () => {
    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        return { id: todo.id, content: todo.content, isDone: !todo.isDone };
      } else {
        return v;
      }
    });
    setTodos(temp);
  };

  const onClickDeleteTodo = () => {
    const temp = todos.filter((v) => {
      if (v.id !== todo.id) {
        return v;
      }
    });
    setTodos(temp);
  };

  const onClickEditTodo = () => {
    if (!content) return;

    const temp = todos.map((v) => {
      if (v.id === todo.id) {
        return { id: todo.id, content, isDone: todo.isDone };
      } else {
        return v;
      }
    });
    setTodos(temp);
    setIsUpdateOpen(false);
  };

  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      {isUpdateOpen ? (
        <Flex>
          <Input value={content} onChange={(e) => setContent(e.target.value)} />
          <Button onClick={onClickEditTodo}>수정</Button>
        </Flex>
      ) : (
        <Text
          fontSize={20}
          w={48}
          isTruncated={true}
          textDecorationLine={`${todo.isDone ? "line-through" : ""}`}
          onClick={onClickIsDone}
        >
          {todo.content}
        </Text>
      )}

      <Button colorScheme="blue" onClick={() => setIsUpdateOpen(!isUpdateOpen)}>
        {isUpdateOpen ? <FiX /> : <FiEdit3></FiEdit3>}
      </Button>
      <Button colorScheme="red" onClick={onClickDeleteTodo}>
        <FiTrash></FiTrash>
      </Button>
    </Flex>
  );
};

export default TodoCard;
