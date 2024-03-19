import { useRef, useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Paper } from "@mui/material";
import { Message, type MessageType } from "./Message";

export const ChatBody = () => {
  const dummyRef = useRef<HTMLDivElement | null>(null);
  const scrollToBottom = () =>
    dummyRef.current!.scrollIntoView({ behavior: "smooth" });
  const messagesRef = collection(getFirestore(), "messages");
  const q = query(messagesRef, orderBy("createdAt"), limit(25));
  const [messages] = useCollectionData(q);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Paper
      sx={{
        width: 1,
        maxHeight: 750,
        overflowY: "auto",
        px: 4,
        bgcolor: "secondary.main",
      }}
    >
      {messages?.map((message, index) => (
        <Message
          key={message.createdAt}
          data={message as MessageType}
          isSameSender={messages[index + 1]?.uid === message.uid}
        />
      ))}
      <div ref={dummyRef}></div>
    </Paper>
  );
};
