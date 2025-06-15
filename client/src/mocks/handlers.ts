import { HttpResponse, delay, http } from "msw";
import dummy from "./dummy.json";

export const handlers = [
  http.post("/step/:id", async ({ params }) => {
    await delay(1000);
    const stepKey = "step" + params.id;
    const stepData = dummy[stepKey as keyof typeof dummy];
    console.log(stepKey);
    return HttpResponse.json(stepData);
  }),
  http.post("/summary", async ({ request }) => {
    const body = await request.json();
    console.log(body);
    await delay(1000);
    return HttpResponse.json(dummy.summary);
  }),
];
