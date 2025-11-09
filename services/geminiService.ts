import { GoogleGenAI } from "@google/genai";
import { AnalysisData, AnalysisResponse, GroundingChunk } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const analyzeKeywords = async (
    myWebsite: string,
    competitorWebsites: string[],
    keywords: string[],
    searchDepth: number
): Promise<AnalysisResponse> => {
    const allWebsites = [myWebsite, ...competitorWebsites].filter(Boolean);

    if (allWebsites.length === 0 || keywords.length === 0) {
        return { analysisData: [], groundingChunks: [] };
    }

    const prompt = `
        Eres una herramienta experta en análisis SEO. Tu tarea es analizar los resultados de búsqueda de Google para un conjunto de palabras clave y sitios web.

        Para cada palabra clave proporcionada, realiza una búsqueda en Google y verifica la presencia de los sitios web listados a continuación en los ${searchDepth} primeros resultados.

        Palabras clave a analizar:
        ${keywords.join('\n')}

        Sitios web a verificar:
        ${allWebsites.join('\n')}

        Para cada palabra clave, informa cuáles de los sitios web se encontraron. Proporciona su ranking (posición) y el título del resultado si se encuentra. Si no se encuentra un sitio web, el ranking y el título deben ser nulos y 'found' debe ser falso.

        Tu respuesta DEBE ser un único objeto JSON válido que se pueda analizar directamente. No incluyas ningún texto, explicaciones o formato markdown como \`\`\`json fuera del objeto JSON.
        La estructura JSON debe ser un array de objetos, donde cada objeto tiene "query" (string) y "results" (array de objetos). Cada objeto de resultado debe tener "website" (string), "rank" (number o null), "title" (string o null), y "found" (boolean).
    `;

    // FIX: Using Google Search tool for real-time data and removing responseSchema as per guidelines.
    let response;
    try {
        response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                tools: [{googleSearch: {}}],
            },
        });
        
        let jsonText = response.text;

        // The model with grounding might return markdown. Extract the JSON part.
        if (jsonText.includes('```json')) {
            jsonText = jsonText.split('```json')[1].split('```')[0];
        }

        const parsedData: AnalysisData = JSON.parse(jsonText.trim());
        
        const groundingChunks: GroundingChunk[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

        return { analysisData: parsedData, groundingChunks };

    } catch (error) {
        console.error("Error calling Gemini API or parsing response:", error);
        if (response) {
            console.error("Raw Gemini response text:", response.text);
        }
        throw new Error("No se pudo obtener un análisis válido de la API de IA. La respuesta podría no ser un JSON válido. Por favor, inténtelo de nuevo.");
    }
};
