import { HttpResponse, http } from "msw";
import dummy from "./dummy.json";

export const handlers = [
  http.get("/step", () => {
    return HttpResponse.json(dummy.step);
  }),
  http.post("/summary", async ({ request }) => {
    const body = await request.json();
    console.log(body);
    return HttpResponse.json(dummy.summary);
  }),
];
