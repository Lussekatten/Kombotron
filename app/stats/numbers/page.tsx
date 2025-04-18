'use client'
import { useEffect, useState } from 'react';
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

let data: string;

const NumbersStatsPage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('1');
    const [Data, setData] = useState<string>('1');
    // Fetch and parse data when dropdown changes
    const numberOneCount = getStatsForNumber(selectedOption);
    const maxAbsence = getAbsenceStatsForNumber(selectedOption);
    const absencePattern = getAbsencePatternForNumber(selectedOption);
    useEffect(() => {
        const loadData = async () => {
            try {
                const result = await getAbsencePatternForNumber(selectedOption);
                setData(result);
            } catch (err) {
                console.error('Data fetch error:', err);
            }
        };

        loadData();
    }, [selectedOption]);


    return (
        <>
            <div className={styles.allWrapper}>
                <div>
                    <h1>Statistik för enskilda nummer</h1>
                </div>
                <div className={styles.dropdownContainer}>
                    <div className={styles.selectWrapper}>
                        <label htmlFor="NumberSelector">Välj ett nummer:</label>
                        <select className={styles.customSelect} id='NumberSelector' name='NumberSelector'
                            value={selectedOption}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        >
                            {Array.from({ length: 35 }, (_, i) => {
                                const value = (i + 1).toString();
                                return (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                </div>
                <h2>Statistik för nummer {selectedOption}</h2>
                <ul>
                    <li>Närvaro-frekvens: Siffran {selectedOption} har kommit upp <b>{numberOneCount} ggr.</b> de senaste {stats.length} dragningarna.</li>
                    <li><b>Längsta frånvaro</b> period: <b>{maxAbsence}</b> dragningar.</li>
                    <li><b>Frånvaro</b>-mönstret de senaste dragningarna: {absencePattern}</li>
                </ul>
                <div style={{ height: '510px' }}>
                    <BarChart dataString={Data} number={selectedOption} />
                </div>
            </div >
        </>
    );
}

export default NumbersStatsPage;