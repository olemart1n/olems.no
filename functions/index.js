import qwikApp from "./server/entry-firebase.mjs";
import { https } from "firebase-functions";

export const app = https.onRequest(qwikApp);
