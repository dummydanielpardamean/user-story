import * as io from "socket.io-client";
import { socketURI } from "./config";

export const socket = io(socketURI);
