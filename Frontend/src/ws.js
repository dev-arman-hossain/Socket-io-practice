import {io} from "socket.io-client";


const ws = () => {
        return io("https://socket-io-practice-oyuk.onrender.com");
}

export default ws
