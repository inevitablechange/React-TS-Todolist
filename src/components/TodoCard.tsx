import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { FiEdit3, FiTrash } from "react-icons/fi";

interface TodoCardProps {
  todo: ITodo;
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <Flex bgColor="white" px={4} py={2} rounded="lg" gap={1}>
      <Text fontSize={20} w={48} isTruncated={true}>
        {todo.content}
      </Text>
      <Button colorScheme="blue">
        <FiEdit3></FiEdit3>
      </Button>
      <Button colorScheme="red">
        <FiTrash></FiTrash>
      </Button>
    </Flex>
  );
};

export default TodoCard;
