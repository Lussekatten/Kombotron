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
  const [filterDropdown, setFilterDropdown] = useState<string>("");
  const [filterInput, setFilterInput] = useState<string>("");

  const handleChange = (index: number, value: string) => {
    const updated = [...selections];
    updated[index] = value === "" ? "" : parseInt(value);
    setSelections(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (selections.includes("")) {
      alert("Please select a value for all three options.");
      return;
    }

    const payload = {
      dropdowns: selections as number[],
      filterValue: filterDropdown,
      filterText: filterInput.trim(),
    };

    console.log("Form submitted with data:", payload);
    processFormData(payload);
  };

  const processFormData = (data: {
    dropdowns: number[];
    filterValue: string;
    filterText: string;
  }) => {
    // Custom logic here
    console.log("Processing form data:", data);
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
    <form className={styles.dropdownCard} onSubmit={handleSubmit}>
      {/* Section 1: Three Dropdowns */}
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

      {/* Section 2: Filters */}
      <div className={styles.filtersSection}>
        <div className={styles.dropdownWrapper}>
          <label htmlFor="filter-dropdown">Max. gruppstorlek:</label>
          <select
            id="filter-dropdown"
            className={styles.customSelect}
            value={filterDropdown}
            onChange={(e) => setFilterDropdown(e.target.value)}
          >
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className={styles.dropdownWrapper}>
          <label htmlFor="filter-input">Välj bort siffror (max. 6):</label>
          <input
            id="filter-input"
            type="text"
            className={styles.customInput}
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
            placeholder="T.ex. 1,25,27,34,35"
          />
        </div>
      </div>

      {/* Section 3: Submit Button */}
      <button className={styles.submitButton} onClick={handleSubmit}>
        Skapa system
      </button>
    </form>
  </div>
);
};

export default ThreeDropdowns;