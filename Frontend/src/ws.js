import { io } from "socket.io-client";

const ws = () => {
  return io("https://backend-ten-gilt-98.vercel.app");
};

export default ws;
