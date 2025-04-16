'use client'
import styles from './create.module.css';
import React, { useState } from 'react';

const generateOptions = (usedValues: number[], currentValue: number | "") => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      const disabled = usedValues.includes(i) && i !== currentValue;
      options.push(
        <option key={i} value={i} disabled={disabled}>
          {i}
        </option>
      );
    }
    return options;
  };

const ThreeDropdowns = () => {
    const [selections, setSelections] = useState<(number | "")[]>(["", "", ""]);

    const handleChange = (index: number, value: string) => {
        const updated = [...selections];
        updated[index] = value === "" ? "" : parseInt(value);
        setSelections(updated);
    };

    const handleSubmit = () => {
        if (selections.includes("")) {
          alert("Please select a value for all three options.");
          return;
        }
    
        // Call your processing function here
        console.log("Submitted values:", selections);
    
        // Example: You can call a function like
        processSelections(selections as number[]);
      };
    
      const processSelections = (values: number[]) => {
        // Your custom logic
        console.log("Processing:", values);
        // Do whatever you want with the selected values here!
      };

    return (
        <div className={styles.allWrapper}>
            <div className={styles.infoContents}>
                <h2>Skapa ett system så här:</h2>
                <ol>
                    <li>Välj dina 3 spik-siffror</li>
                    <li>Välj filter (1 eller fler)</li>
                    <li>Klicka på "Skapa system" knappen</li>
                </ol>
            </div>
            <div className={styles.dropdownContainer}>
                {["Välj första", "Välj andra", "Välj tredje"].map((label, index) => (
                    <div className={styles.selectWrapper} key={index}>
                        <label htmlFor={`dropdown-${index}`}>{label} "spik"-siffran</label>
                        <select
                            id={`dropdown-${index}`}
                            className={styles.customSelect}
                            value={selections[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                        >
                            <option value="">Välj</option>
                            {/* selections.filter(v => v !== "") ensures that only numbers are passed */}
                            {generateOptions(selections.filter(v => v !== "") as number[], selections[index])}
                        </select>
                    </div>
                ))}
            </div>
            <button className={styles.submitButton} onClick={handleSubmit}>
                Skapa system
            </button>
        </div>
    );
};

export default ThreeDropdowns;