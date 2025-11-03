'use client'
import { useState } from 'react';

function SortedTable() {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

    const data = [
        {
            id: 1,
            name: "Rosa",
            significance: "Amor, pasión y belleza",
            bestPairedWith: "Nube (baby’s breath), lirios, peonías",
            nativeRegion: "Asia, Europa, América del Norte"
        },
        {
            id: 2,
            name: "Tulipán",
            significance: "Amor perfecto y renacimiento",
            bestPairedWith: "Narcisos, jacintos, lirios",
            nativeRegion: "Asia Central, Turquía, Países Bajos"
        },
        {
            id: 3,
            name: "Lavanda",
            significance: "Calma, gracia y pureza",
            bestPairedWith: "Rosas, margaritas, eucalipto",
            nativeRegion: "Región del Mediterráneo"
        },
        {
            id: 4,
            name: "Girasol",
            significance: "Adoración, lealtad y felicidad",
            bestPairedWith: "Margaritas, zinnias, ásteres",
            nativeRegion: "América del Norte y Central"
        },
        {
            id: 5,
            name: "Orquídea",
            significance: "Lujo, fortaleza y belleza",
            bestPairedWith: "Helechos, anturios, lirios",
            nativeRegion: "Asia tropical, América Central y del Sur"
        },
        {
            id: 6,
            name: "Cerezo en flor",
            significance: "Transitoriedad de la vida y renovación",
            bestPairedWith: "Camelias, azaleas, magnolias",
            nativeRegion: "Japón, China, Corea"
        },
        {
            id: 7,
            name: "Margarita",
            significance: "Inocencia, pureza y nuevos comienzos",
            bestPairedWith: "Lavanda, rosas, girasoles",
            nativeRegion: "Europa, América del Norte"
        },
        {
            id: 8,
            name: "Lirio",
            significance: "Pureza, devoción y renacimiento",
            bestPairedWith: "Rosas, tulipanes, hortensias",
            nativeRegion: "Europa, Asia, América del Norte"
        },
        {
            id: 9,
            name: "Hortensia",
            significance: "Gratitud, gracia y abundancia",
            bestPairedWith: "Rosas, peonías, eucalipto",
            nativeRegion: "Japón, China, Corea"
        },
        {
            id: 10,
            name: "Peonía",
            significance: "Romance, prosperidad y buena fortuna",
            bestPairedWith: "Rosas, hortensias, lirios",
            nativeRegion: "Asia, Europa, América del Norte"
        }
    ];

    const sortedData = data.toSorted((a, b) => {
        if (!sortConfig.key) return 0;
        const aValue = a[sortConfig.key];
        const bValue = b[sortConfig.key];

        // Si es una fecha
        if (sortConfig.key === 'lastLogin') {
            return (new Date(aValue) - new Date(bValue)) * (sortConfig.direction === 'asc' ? 1 : -1);
        }

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const headers = [
        { key: 'name', label: 'Nombre' },
        { key: 'significance', label: 'Significado' },
        { key: 'bestPairedWith', label: 'Recomendado emparejar con' },
        { key: 'nativeRegion', label: 'Nativa de' }
    ];

    return (
        <div className="overflow-x-auto">
            <table className="table table-xl">
                <thead>
                    <tr>
                        <th>#</th>
                        {headers.map(h => (
                            <th key={h.key} onClick={() => requestSort(h.key)} className="cursor-pointer">
                                {h.label}
                                {sortConfig.key === h.key ? (sortConfig.direction === 'asc' ? ' 🔼' : ' 🔽') : ''}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {sortedData.map((item, index) => (
                        <tr key={item.id}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.significance}</td>
                            <td>{item.bestPairedWith}</td>
                            <td>{item.nativeRegion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SortedTable;
