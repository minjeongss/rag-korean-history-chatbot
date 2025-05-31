import { HttpResponse, http } from "msw";
import dummy from "./dummy.json";

export const handlers = [
  http.get("/step", () => {
    return HttpResponse.json(dummy.step);
  }),
  http.get("/summary", () => {
    return HttpResponse.json(dummy.summary);
  }),
];
