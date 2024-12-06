import React, { useState } from "react";

/**
 * Generalized component for editing a single filter part.
 *
 * @param {string} field - The name of the field being filtered.
 * @param {string} initialOperator - Initial operator for the filter condition (e.g., _eq, _gt).
 * @param {string} initialValue - Initial value for the filter condition.
 * @param {function} onChange - Callback to update the parent with the new filter condition.
 */
const FilterPart = ({ field, initialOperator, initialValue, onChange }) => {
  const [operator, setOperator] = useState(initialOperator || "_eq");
  const [value, setValue] = useState(initialValue || "");

  const handleOperatorChange = (e) => {
    const newOperator = e.target.value;
    setOperator(newOperator);
    onChange({ operator: newOperator, value });
  };

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange({ operator, value: newValue });
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label>
        Operator:
        <select value={operator} onChange={handleOperatorChange} style={{ margin: "0 1rem" }}>
          <option value="_ge">_ge</option>
          <option value="_eq">_eq</option>
          <option value="_gt">_gt</option>
          <option value="_le">_le</option>
          <option value="_lt">_lt</option>
          <option value="_ne">_ne</option>
          <option value="_ilike">_ilike</option>
        </select>
      </label>
      <label>
        Value:
        <input
          type="text"
          value={value}
          onChange={handleValueChange}
          style={{ margin: "0 1rem" }}
        />
      </label>
    </div>
  );
};

/**
 * Main component for managing a filter with up to two logical statements and one operator.
 *
 * @param {string} field - The name of the field being filtered.
 * @param {object} initialFilter - The initial filter in JSON format.
 * @param {function} onFilterChange - Callback to update the parent with the new filter.
 */
export const StringFilterEditor = ({ field, initialFilter, onFilterChange }) => {
  const initialOperator = initialFilter?._and ? "_and" : initialFilter?._or ? "_or" : null;
  const initialConditions = initialFilter?.[initialOperator] || initialFilter ? [initialFilter] : [];

  const [logicalOperator, setLogicalOperator] = useState(initialOperator);
  const [conditions, setConditions] = useState(initialConditions);

  /**
   * Updates the logical operator and ensures the conditions are valid.
   *
   * @param {string} newOperator - The new logical operator (_and or _or).
   */
  const handleLogicalOperatorChange = (newOperator) => {
    setLogicalOperator(newOperator);
    updateFilter(newOperator, conditions);
  };

  /**
   * Updates a specific condition in the list.
   *
   * @param {number} index - Index of the condition to update.
   * @param {object} newCondition - Updated condition.
   */
  const handleConditionChange = (index, newCondition) => {
    const updatedConditions = [...conditions];
    updatedConditions[index] = { [field]: { [newCondition.operator]: newCondition.value } };
    setConditions(updatedConditions);
    updateFilter(logicalOperator, updatedConditions);
  };

  /**
   * Adds a new condition to the list if not exceeding the maximum allowed.
   */
  const addCondition = () => {
    if (conditions.length < 2) {
      setConditions([...conditions, {}]);
    } else {
      alert("You can only add up to two conditions.");
    }
  };

  /**
   * Removes a condition from the list.
   *
   * @param {number} index - Index of the condition to remove.
   */
  const removeCondition = (index) => {
    const updatedConditions = conditions.filter((_, i) => i !== index);
    setConditions(updatedConditions);

    // If no conditions remain, reset the filter
    if (updatedConditions.length === 0) {
      setLogicalOperator(null);
      onFilterChange(null);
    } else {
      updateFilter(logicalOperator, updatedConditions);
    }
  };

  /**
   * Updates the parent component with the new filter structure.
   *
   * @param {string|null} operator - The logical operator (_and or _or), or null if only one condition.
   * @param {Array} updatedConditions - List of updated conditions.
   */
  const updateFilter = (operator, updatedConditions) => {
    if (updatedConditions.length === 1) {
      onFilterChange(updatedConditions[0]); // Single condition without logical operator
    } else if (operator) {
      onFilterChange({ [operator]: updatedConditions });
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {conditions.map((condition, index) => (
        <div key={index} style={{ marginBottom: "1rem", padding: "0.5rem", border: "1px solid #ccc" }}>
          <FilterPart
            field={field}
            initialOperator={Object.keys(condition[field] || {})[0]}
            initialValue={Object.values(condition[field] || {})[0]}
            onChange={(newCondition) => handleConditionChange(index, newCondition)}
          />
          <button onClick={() => removeCondition(index)}>Remove</button>
        </div>
      ))}

      {conditions.length === 2 && (
        <div>
          <label>
            Logical Operator:
            <select
              value={logicalOperator || "_and"}
              onChange={(e) => handleLogicalOperatorChange(e.target.value)}
              style={{ margin: "0 1rem" }}
            >
              <option value="_and">_and</option>
              <option value="_or">_or</option>
            </select>
          </label>
        </div>
      )}

      <button onClick={addCondition} disabled={conditions.length >= 2}>
        Add Condition
      </button>
    </div>
  );
};
