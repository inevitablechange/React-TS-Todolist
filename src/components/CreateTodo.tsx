import { Flex, Button, Input } from "@chakra-ui/react";
import { FC, useState } from "react";

interface CreateTodoProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const CreateTodo: FC<CreateTodoProps> = ({ todos, setTodos }) => {
  const [content, setContent] = useState<string>();
  const [currentTodoId, setCurrentTodoId] = useState<number>(
    todos[todos.length - 1]?.id
  );

  const onClickCreateTodo = () => {
    if (!content) return;

    setTodos([...todos, { id: todos.length + 1, content, isDone: false }]);
    setCurrentTodoId(currentTodoId + 1);
    setContent("");
  };

  return (
    <Flex bgColor="teal.100" h={32} justifyContent="center" alignItems="center">
      <Input value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={onClickCreateTodo}>만들기</Button>
    </Flex>
  );
};

export default CreateTodo;
