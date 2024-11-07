'use client';
import React, { useState } from 'react';
import { Parser } from 'json2csv';

const Page = () => {
    const [error, setError] = useState(null);

    const downloadCSV = async () => {
        try {
            // Fetch data from the API
            const response = await fetch('/api/forms/auto');
            if (!response.ok) throw new Error("Failed to fetch data");
            
            const { data } = await response.json();

            // Convert data to CSV
            const fields = Object.keys(data[0] || {}); // Dynamically get fields from data
            const json2csvParser = new Parser({ fields });
            const csv = json2csvParser.parse(data);

            // Create a Blob from the CSV and download it
            const blob = new Blob([csv], { type: 'text/csv' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'data.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        } catch (e) {
            console.error("Error downloading CSV:", e);
            setError("Failed to download CSV");
        }
    };

    return (
        <div>
            <h1>Descargar CSV</h1>
            <button onClick={downloadCSV}>Download as CSV</button>
            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default Page;
