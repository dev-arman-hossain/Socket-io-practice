import {io} from "socket.io-client";


const ws = () => {
        return io("http://localhost:3000");
}

export default ws
