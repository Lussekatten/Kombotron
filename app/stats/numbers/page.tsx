'use client'
import { useState } from 'react';
import { StatsNavMenu } from "@/app/components/navbar/menus";
import stats from '@/data/latest1000drawings.json';
import styles from "./numbers.module.css"
import { getAbsencePatternForNumber, getAbsenceStatsForNumber, getStatsForNumber } from "@/app/actions";

// components/BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import BarChart from "@/app/components/barchart/BarChart";

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Type for the data options
type DataOptions = {
    option1: string;
    option2: string;
    option3: string;
};

const NumbersStatsPage: React.FC = () => {
    // Define the different data strings (example data for demonstration)
    const dataOptions: DataOptions = {
        option1: "10 20 30 40 50",
        option2: "15 25 35 45 55",
        option3: "5 15 25 35 45",
    };
    // State for selected data string and dropdown selection
    const [selectedData, setSelectedData] = useState<string>(dataOptions.option1);

    // Handle dropdown change
    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.value as keyof DataOptions; // Type assertion
        setSelectedData(dataOptions[selectedOption]);
    };

    const numberOneCount = getStatsForNumber('3');
    const maxAbsence = getAbsenceStatsForNumber('3');
    const absencePattern = getAbsencePatternForNumber('3');

    return (
        <div className={styles.allWrapper}>
            <StatsNavMenu />
            
            <h1>Statistik om enskilda nummer</h1>
            <h2>Statistik för nummer 1</h2>
            <ul>
                <li>Siffran 1 har kommit upp {numberOneCount} ggr. de senaste {stats.length} dragningarna.</li>
                <li>Längsta frånvaro period hittad: {maxAbsence} dragningar.</li>
                <li>Mönstret de senaste 100 dragningarna är: {absencePattern}</li>
            </ul>
            <div style={{ height: '550px' }}>
                <BarChart dataString={absencePattern} number='3'/>
            </div>
        </div >
    );
}

export default NumbersStatsPage;