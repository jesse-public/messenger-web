import { FC } from "react";
import { useConversation } from "../hooks";

const MessageList: FC = () => {
  const { messages } = useConversation();
  const messageItems = messages.map((message, index) => <div key={index}>{message}</div>);

  return <div>{messageItems}</div>;
};

export default MessageList;
