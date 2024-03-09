import OpenAI from 'openai';
import { OPENAI_CDN } from './constants';

const openai = new OpenAI({
  apiKey: OPENAI_CDN, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});
export default openai;