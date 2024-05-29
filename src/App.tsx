import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

const sampleData: ITodo[] = [
  {
    id: 1,
    content: "🏃‍♀️ 달리기",
    isDone: false,
  },
  {
    id: 2,
    content: "🎈 풍선구매",
    isDone: true,
  },
  {
    id: 3,
    content: "🧹 청소하기",
    isDone: false,
  },
];

const App: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(sampleData);

  return (
    <Flex flexDir="column" minH="100vh">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </Flex>
  );
};

export default App;
