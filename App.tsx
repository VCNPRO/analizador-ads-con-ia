import React, { useState, useMemo } from 'react';
import { analyzeKeywords } from './services/geminiService';
import { AnalysisData, GroundingChunk } from './types';
import ResultsTable from './components/ResultsTable';
import SummaryChart from './components/SummaryChart';
import { PlusIcon, TrashIcon, SaveIcon, LoadIcon } from './components/icons';

const App: React.FC = () => {
    const [myWebsite, setMyWebsite] = useState<string>('');
    const [competitorWebsites, setCompetitorWebsites] = useState<string[]>(['']);
    const [keywords, setKeywords] = useState<string[]>(['']);
    const [searchDepth, setSearchDepth] = useState<number>(20);
    const [analysisData, setAnalysisData] = useState<AnalysisData | null>(null);
    const [groundingChunks, setGroundingChunks] = useState<GroundingChunk[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'info' } | null>(null);

    const LOCAL_STORAGE_KEY = 'seoAnalysisResults';

    const showFeedback = (message: string, type: 'success' | 'info') => {
        setFeedback({ message, type });
        setTimeout(() => setFeedback(null), 3000);
    };

    const handleSaveAnalysis = () => {
        if (!analysisData) {
            showFeedback('No hay datos de análisis para guardar.', 'info');
            return;
        }
        const dataToSave = {
            myWebsite,
            competitorWebsites,
            keywords,
            searchDepth,
            analysisData,
            groundingChunks,
        };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToSave));
        showFeedback('¡Análisis guardado con éxito!', 'success');
    };

    const handleLoadAnalysis = () => {
        const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (savedData) {
            const loadedData = JSON.parse(savedData);
            setMyWebsite(loadedData.myWebsite || '');
            setCompetitorWebsites(loadedData.competitorWebsites || ['']);
            setKeywords(loadedData.keywords || ['']);
            setSearchDepth(loadedData.searchDepth || 20);
            setAnalysisData(loadedData.analysisData || null);
            setGroundingChunks(loadedData.groundingChunks || []);
            setError(null);
            showFeedback('Último análisis cargado.', 'success');
        } else {
            showFeedback('No se encontraron análisis guardados.', 'info');
        }
    };


    const handleAddCompetitor = () => {
        setCompetitorWebsites([...competitorWebsites, '']);
    };

    const handleRemoveCompetitor = (index: number) => {
        setCompetitorWebsites(competitorWebsites.filter((_, i) => i !== index));
    };

    const handleCompetitorChange = (index: number, value: string) => {
        const newCompetitors = [...competitorWebsites];
        newCompetitors[index] = value;
        setCompetitorWebsites(newCompetitors);
    };

    const handleAddKeyword = () => {
        setKeywords([...keywords, '']);
    };

    const handleRemoveKeyword = (index: number) => {
        setKeywords(keywords.filter((_, i) => i !== index));
    };

    const handleKeywordChange = (index: number, value: string) => {
        const newKeywords = [...keywords];
        newKeywords[index] = value;
        setKeywords(newKeywords);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setAnalysisData(null);
        setGroundingChunks([]);

        const filteredCompetitors = competitorWebsites.filter(c => c.trim() !== '');
        const filteredKeywords = keywords.filter(k => k.trim() !== '');

        if (!myWebsite.trim() || filteredKeywords.length === 0) {
            setError("Por favor, ingrese su sitio web y al menos una palabra clave.");
            setLoading(false);
            return;
        }

        try {
            const { analysisData: data, groundingChunks: chunks } = await analyzeKeywords(myWebsite, filteredCompetitors, filteredKeywords, searchDepth);
            setAnalysisData(data);
            setGroundingChunks(chunks);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocurrió un error desconocido.');
        } finally {
            setLoading(false);
        }
    };

    const chartData = useMemo(() => {
        if (!analysisData) return [];
        
        const websiteAppearances: { [key: string]: number } = {};
        const allWebsites = [myWebsite, ...competitorWebsites.filter(Boolean)];
        allWebsites.forEach(site => {
            websiteAppearances[site] = 0;
        });
        
        analysisData.forEach(queryResult => {
            queryResult.results.forEach(result => {
                if (result.found && websiteAppearances.hasOwnProperty(result.website)) {
                    websiteAppearances[result.website]++;
                }
            });
        });
        
        return Object.entries(websiteAppearances).map(([name, appearances]) => ({
            name,
            appearances
        }));
    }, [analysisData, myWebsite, competitorWebsites]);
    
    return (
        <div className="min-h-screen bg-base-100 text-content-100 p-4 sm:p-6 lg:p-8">
            {feedback && (
                <div className="fixed top-5 right-5 z-50">
                    <div role="alert" className={`p-4 rounded-lg shadow-lg text-white ${feedback.type === 'success' ? 'bg-brand-secondary' : 'bg-base-300 text-content-100'}`}>
                        <span>{feedback.message}</span>
                    </div>
                </div>
            )}
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-10">
                    <h1 className="text-4xl sm:text-5xl font-bold text-brand-primary mb-2">Analizador SEO con IA</h1>
                    <p className="text-xl font-semibold text-content-100 mb-2">
                        Hola Alicia, vamos a ver donde estamos hoy en los ranking de búsqueda de Google frente a los competidores
                    </p>
                    <p className="text-lg text-content-200">
                        Descubra su posición en los rankings de búsqueda de Google frente a sus competidores.
                    </p>
                </header>

                <main>
                    <div className="bg-base-200 p-6 rounded-lg shadow-xl mb-10">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">Sitios Web</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="myWebsite" className="block text-sm font-medium mb-1">Su Sitio Web (Requerido)</label>
                                            <input
                                                type="text"
                                                id="myWebsite"
                                                className="input input-bordered w-full"
                                                placeholder="ej: misitioweb.com"
                                                value={myWebsite}
                                                onChange={(e) => setMyWebsite(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Sitios Web de la Competencia</label>
                                            {competitorWebsites.map((competitor, index) => (
                                                <div key={index} className="flex items-center gap-2 mb-2">
                                                    <input
                                                        type="text"
                                                        className="input input-bordered w-full"
                                                        placeholder={`competidor ${index + 1}.com`}
                                                        value={competitor}
                                                        onChange={(e) => handleCompetitorChange(index, e.target.value)}
                                                    />
                                                    <button type="button" onClick={() => handleRemoveCompetitor(index)} className="btn btn-ghost btn-square">
                                                        <TrashIcon className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            ))}
                                            <button type="button" onClick={handleAddCompetitor} className="btn btn-sm btn-outline btn-primary mt-2">
                                                <PlusIcon className="w-4 h-4 mr-1" />
                                                Añadir Competidor
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-brand-secondary">Palabras Clave</h2>
                                    <div className="space-y-2">
                                        {keywords.map((keyword, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <input
                                                    type="text"
                                                    className="input input-bordered w-full"
                                                    placeholder={`Palabra Clave #${index + 1}`}
                                                    value={keyword}
                                                    onChange={(e) => handleKeywordChange(index, e.target.value)}
                                                />
                                                <button type="button" onClick={() => handleRemoveKeyword(index)} className="btn btn-ghost btn-square">
                                                    <TrashIcon className="w-5 h-5" />
                                                </button>
                                            </div>
                                        ))}
                                        <button type="button" onClick={handleAddKeyword} className="btn btn-sm btn-outline btn-primary mt-2">
                                            <PlusIcon className="w-4 h-4 mr-1" />
                                            Añadir Palabra Clave
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8">
                                <label htmlFor="searchDepth" className="block text-sm font-medium mb-2 text-center">Profundidad de Búsqueda</label>
                                <div className="flex justify-center">
                                    <input
                                        type="number"
                                        id="searchDepth"
                                        className="input input-bordered w-32 text-center"
                                        value={searchDepth}
                                        onChange={e => setSearchDepth(Math.max(10, Math.min(50, Number(e.target.value) || 10)))}
                                        min="10"
                                        max="50"
                                    />
                                </div>
                                <p className="text-xs text-center text-content-200 mt-1">Número de resultados a analizar (entre 10 y 50).</p>
                            </div>
                            <div className="mt-6 text-center flex items-center justify-center flex-wrap gap-4">
                                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="loading loading-spinner"></span>
                                            Analizando...
                                        </>
                                    ) : 'Analizar Rankings'}
                                </button>
                                <button type="button" onClick={handleLoadAnalysis} className="btn btn-outline btn-lg" disabled={loading}>
                                    <LoadIcon className="w-6 h-6 mr-2" />
                                    Cargar Último Análisis
                                </button>
                            </div>
                        </form>
                    </div>

                    {error && (
                        <div role="alert" className="alert alert-error mb-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>Error: {error}</span>
                        </div>
                    )}

                    {analysisData && (
                        <div id="results" className="space-y-10">
                             <div className="bg-base-200 p-6 rounded-lg shadow-xl">
                                <h2 className="text-3xl font-bold mb-6 text-center text-brand-primary">Resumen de Apariciones</h2>
                                <div style={{ width: '100%', height: 400 }}>
                                    <SummaryChart data={chartData} />
                                </div>
                            </div>
                            <div className="bg-base-200 p-6 rounded-lg shadow-xl">
                                <div className="flex justify-center sm:justify-between items-center mb-6 flex-wrap gap-4">
                                    <h2 className="text-3xl font-bold text-brand-primary text-center sm:text-left">Resultados Detallados</h2>
                                    <button onClick={handleSaveAnalysis} className="btn btn-outline btn-primary">
                                        <SaveIcon className="w-5 h-5 mr-2" />
                                        Guardar Análisis
                                    </button>
                                </div>
                                <ResultsTable data={analysisData} myWebsite={myWebsite} />
                            </div>
                             {groundingChunks.length > 0 && (
                                <div className="bg-base-200 p-6 rounded-lg shadow-xl">
                                    <h3 className="text-2xl font-bold mb-4 text-brand-secondary">Fuentes</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        {groundingChunks.filter(c => c.web && c.web.uri).map((chunk, index) => (
                                            <li key={index}>
                                                <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="link link-primary">
                                                    {chunk.web.title || chunk.web.uri}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default App;
