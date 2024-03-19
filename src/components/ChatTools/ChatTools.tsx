import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useForm } from "react-hook-form";
import { Box, TextField, Button, IconButton } from "@mui/material";
import { Send, MicNone } from "@mui/icons-material";
import { IconTools } from "./IconTools";

interface FormValues {
  text: string;
}

export const ChatTools = () => {
  const auth = getAuth();
  const { uid, photoURL, displayName } = auth.currentUser!;

  const { register, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { text: "" },
  });
  const messagesRef = collection(getFirestore(), "messages");

  const sendMessage = handleSubmit(async ({ text }) => {
    await addDoc(messagesRef, {
      displayName,
      text,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    reset();
  });

  return (
    <Box
      sx={{
        width: 1,
        height: 70,
        borderRadius: "50%",
        mt: 4,
      }}
    >
      <Box
        component="form"
        onSubmit={sendMessage}
        autoComplete="off"
        sx={{
          width: 1,
          height: 1,
          display: "flex",
          alignItems: "center",
          bgcolor: "secondary.light",
          borderRadius: 8,
        }}
      >
        <IconButton sx={{ ml: 1 }}>
          <MicNone fontSize="large" />
        </IconButton>
        <TextField
          sx={{ flex: 1, justifyContent: "center" }}
          variant="standard"
          placeholder="Write something"
          {...register("text")}
          InputProps={{
            sx: {
              fontSize: 26,
              "::before": { display: "none" },
              "::after": { display: "none" },
            },
          }}
          inputProps={{ padding: 4 }}
        />
        <IconTools />
        <Button
          sx={{ borderRadius: "50%", height: 1 }}
          type="submit"
          variant="contained"
        >
          <Send sx={{ width: 30, height: 30, mx: 0.5 }} />
        </Button>
      </Box>
    </Box>
  );
};
export default ChatTools;
