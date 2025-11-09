
export interface AnalysisResultItem {
  website: string;
  rank: number | null;
  title: string | null;
  found: boolean;
}

export interface QueryResult {
  query: string;
  results: AnalysisResultItem[];
}

export type AnalysisData = QueryResult[];

// Added to support grounding metadata from Google Search tool
export interface GroundingChunk {
  web: {
    uri: string;
    title: string;
  };
}

// Added to create a single response object from the service
export interface AnalysisResponse {
  analysisData: AnalysisData;
  groundingChunks: GroundingChunk[];
}
