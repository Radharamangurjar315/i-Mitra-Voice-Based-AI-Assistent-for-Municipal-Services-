// server/config/gemini.js
import 'dotenv/config';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize with your API key from environment variables
const genAI = new GoogleGenerativeAI("AIzaSyB2JgEMSTkFctdDBr6B3XnYnzRpP1mTanI" );

// Function to get a supported Gemini model
export const getGeminiModel = () => {
  // Change the model name to one of the supported ones:
  // "gemini-2.5-pro", "gemini-2.5-flash", or "gemini-2.5-flash-lite"
  return genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
};
