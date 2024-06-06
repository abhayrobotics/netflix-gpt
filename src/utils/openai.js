import OpenAI from "openai";
import { openAiKey } from "../utils/constant";

export const openai = new OpenAI({
  apiKey: openAiKey,
  dangerouslyAllowBrowser: true,
});
