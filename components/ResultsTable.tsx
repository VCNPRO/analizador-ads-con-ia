import React, { useState } from 'react';
import { AnalysisData, AnalysisResultItem } from '../types';

interface ResultsTableProps {
    data: AnalysisData;
    myWebsite: string;
}

interface TooltipData {
    content: {
        title: string;
        url: string;
    };
    x: number;
    y: number;
}


const ResultsTable: React.FC<ResultsTableProps> = ({ data, myWebsite }) => {
    const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);

    if (!data || data.length === 0) {
        return <p>No hay datos para mostrar.</p>;
    }

    const allWebsites = data[0]?.results.map(r => r.website).sort((a, b) => {
        if (a === myWebsite) return -1;
        if (b === myWebsite) return 1;
        return a.localeCompare(b);
    }) || [];
    
    const handleMouseMove = (e: React.MouseEvent, result: AnalysisResultItem | undefined) => {
        if (result && result.found) {
            setTooltipData({
                content: {
                    title: result.title || 'No disponible',
                    url: result.website,
                },
                x: e.clientX,
                y: e.clientY,
            });
        }
    };

    const handleMouseLeave = () => {
        setTooltipData(null);
    };

    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th className="!z-0 sticky left-0 bg-base-200">Palabra Clave</th>
                        {allWebsites.map(website => (
                            <th key={website} className="text-center">
                                {website}
                                {website === myWebsite && <span className="badge badge-primary badge-sm ml-2">Tuyo</span>}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({ query, results }) => {
                        let topCompetitorRank = Infinity;
                        let topCompetitorWebsite: string | null = null;

                        results.forEach(result => {
                            if (result.website !== myWebsite && result.found && result.rank !== null && result.rank < topCompetitorRank) {
                                topCompetitorRank = result.rank;
                                topCompetitorWebsite = result.website;
                            }
                        });

                        return (
                            <tr key={query} className="hover">
                                <td className="font-semibold sticky left-0 bg-base-200">{query}</td>
                                {allWebsites.map(website => {
                                    const result = results.find(r => r.website === website);
                                    const isMyWebsite = website === myWebsite;
                                    const isTopCompetitor = website === topCompetitorWebsite;

                                    let cellClassName = 'text-center transition-colors duration-200 border-b-2 border-base-300';
                                    let rankTextClass = 'font-bold text-lg';

                                    if (isMyWebsite) {
                                        cellClassName += ' bg-brand-secondary/20';
                                    } else if (isTopCompetitor) {
                                        cellClassName += ' bg-yellow-500/20';
                                    }

                                    if (result && result.found && result.rank !== null) {
                                        if (result.rank === 1) {
                                            rankTextClass += ' text-yellow-400';
                                            cellClassName += ' border-l-4 border-yellow-400';
                                        } else if (result.rank === 2) {
                                            rankTextClass += ' text-slate-300';
                                            cellClassName += ' border-l-4 border-slate-300';
                                        } else if (result.rank === 3) {
                                            rankTextClass += ' text-orange-400';
                                            cellClassName += ' border-l-4 border-orange-400';
                                        } else {
                                            rankTextClass += ' text-content-100';
                                        }
                                    }

                                    return (
                                        <td 
                                            key={website} 
                                            className={cellClassName}
                                            onMouseMove={(e) => handleMouseMove(e, result)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            {result && result.found ? (
                                                <div className="flex flex-col items-center justify-center p-2 min-h-[4rem]">
                                                    <span className={rankTextClass}>{result.rank}</span>
                                                    <span className="text-xs text-content-200 truncate max-w-xs">{result.title}</span>
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center min-h-[4rem]">
                                                    <span className="text-error">-</span>
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {tooltipData && (
                <div
                    className="fixed z-10 p-3 text-sm font-medium text-content-100 bg-base-300 rounded-lg shadow-lg max-w-xs pointer-events-none"
                    style={{
                        left: `${tooltipData.x + 15}px`,
                        top: `${tooltipData.y + 15}px`,
                    }}
                >
                    <p className="font-bold break-words">{tooltipData.content.title}</p>
                    <p className="text-content-200 break-all">{tooltipData.content.url}</p>
                </div>
            )}
        </div>
    );
};

export default ResultsTable;