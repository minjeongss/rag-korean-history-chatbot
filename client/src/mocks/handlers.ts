import { HttpResponse, delay, http } from "msw";
import dummy from "./dummy.json";

export const handlers = [
  http.get("/step", () => {
    return HttpResponse.json(dummy.step);
  }),
  http.post("/summary", async ({ request }) => {
    const body = await request.json();
    console.log(body);
    await delay(5000);
    return HttpResponse.json(dummy.step);
  }),
];
