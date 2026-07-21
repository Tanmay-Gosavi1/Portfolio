import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

export const getAIResponse = async (req, res) => {
    try {
        const { message, messages } = req.body || {};
        const normalizedMessages = Array.isArray(messages) ? messages : [];

        const conversationText = normalizedMessages.length > 0
            ? normalizedMessages
                .map((entry) => {
                    if (typeof entry === 'string') return entry;
                    if (entry && typeof entry === 'object') {
                        const sender = entry.sender || entry.role || 'user';
                        const text = entry.text || entry.content || entry.message || '';
                        return `${sender === 'user' ? 'User' : 'Assistant'}: ${text}`;
                    }
                    return '';
                })
                .filter(Boolean)
                .join('\n')
            : (typeof message === 'string' ? message : '');

        const userMessage = conversationText?.trim();

        if (!userMessage) {
            return res.status(400).json({ success: false, message: 'Message is required' });
        }

        const systemContext = `This is the complete and authoritative profile data of Tanmay Gosavi.
                        You MUST use ONLY this information to answer user questions.
                        Do NOT assume, guess, or invent anything beyond this data.

                        PROFILE
                        Name: Tanmay Gosavi
                        Role: B.Tech Information Technology Student | Full Stack Developer
                        Location: India

                        Contact:
                        - Email: work.tanmayy@gmail.com
                        - Phone: +91-797-230-8018
                        - LinkedIn: 'in/tanmay-gosavi-a42368324'
                        - GitHub: 'github/Tanmay-Gosavi1'

                        EDUCATION:
                        IIIT Vadodara (2024-2028), B.Tech IT, CGPA 8.40
                        HSC Maharashtra Board (2022-2024): 85.33%
                        SSC Maharashtra Board (2022): 96.40%

                        EXPERIENCE
                        Company: Aurameter
                        Role: Full Stack Developer Intern
                        Type: Remote
                        Duration: Sept 2025 - Dec 2025

                        Work:
                        - Built optimized PostgreSQL queries to aggregate stories, streaks, and engagement data into a single API response
                        - Implemented backend logic for story views and reciprocal streaks using Node.js and PostgreSQL
                        - Ensured accurate daily engagement tracking
                        - Integrated Google Gemini API to generate AI-based aura scores and contextual feedback
                        - Contributed to the Endless Achievements system with activity-based reward and achievement tracking

                        PROJECTS
                        Project1: Prepmate - AI-Powered Learning Assistant
                        Tech Stack: React, Node.js, Express, MongoDB, Google Gemini API

                        Details:
                        - Full-stack AI learning platform for students
                        - Users can upload PDFs and generate:
                        - Context-aware AI chat
                        - Flashcards
                        - Quizzes
                        - Summaries
                        - Implemented a context-restricted RAG system that answers only from uploaded documents
                        - Built an analytics dashboard to track study progress, quiz performance, streaks, and revision activity
                        - Integrated PDF parsing, text chunking, and caching to optimize AI usage
                        - Secured the platform with JWT authentication
                        - Handled file uploads using cloudinary

                        SKILLS
                        C++, C, JavaScript , TypeScript , SQL
                        Node.js, Express, PostgreSQL, MongoDB
                        NextJs , React, Tailwind, Redux
                        DSA, DBMS, OOP, OS, CN
                        Git, GitHub, RESTful APIs, JWT, Agile

                        ACHIEVEMENTS:
                        1400+ CodeChef rating
                        Top 5 HackIIITV finalist
                        500+ DSA problems solved

                        BEHAVIOR RULES
                        1. Respond in first person ("I", "my", "me") as Tanmay.
                        2. Be professional, confident, and concise.
                        3. If info is missing, say:
                        "I don't have that information yet, but you can contact me directly."
                        4. Do not answer personal, political, or irrelevant questions.
                        5. Encourage collaboration, hiring, or contact when appropriate.
                        6. Keep responses short unless the user asks for details.
                        7. Answer open-ended questions by relating them to my skills and experience.
                        Answer the following question in a concise, to the point and professional manner.`;

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: [{ role: 'user', parts: [{ text: userMessage }] }],
            config: { systemInstruction: systemContext }
        });

        const responseText = typeof response?.text === 'string' && response.text.trim()
            ? response.text.trim()
            : response?.candidates?.[0]?.content?.parts
                ?.map((part) => part?.text || '')
                .join('')
                .trim() || '';

        if (!responseText) {
            return res.status(502).json({
                success: false,
                message: 'The AI service returned an empty response. Please try again.'
            });
        }

        res.status(200).json({ success: true, data: responseText });
    } catch (error) {
        console.error('Error generating AI response:', error);
        res.status(500).json({
            success: false,
            message: error?.message || 'The AI service is unavailable right now. Please try again in a moment.'
        });
    }
};