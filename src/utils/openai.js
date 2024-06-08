import OpenAI from "openai";
import { openAiKey } from "../utils/constant";

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_Open_AI,
  
});
