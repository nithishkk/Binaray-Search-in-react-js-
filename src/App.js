import React, { useState } from "react";

function BinarySearch() {
  const [array, setArray] = useState([2, 3, 5, 7, 8, 10, 12, 15, 18, 20]);
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const binarySearch = (arr, value) => {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if (arr[middleIndex] === value) {
        return middleIndex;
      }
      if (arr[middleIndex] < value) {
        startIndex = middleIndex + 1;
      } else {
        endIndex = middleIndex - 1;
      }
    }
    return -1;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = binarySearch(array, parseInt(searchTerm));
    if (index === -1) {
      setResult("Element not found");
    } else {
      setResult(`Element found at index ${index}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search Element:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <p>{result}</p>
    </div>
  );
}

export default BinarySearch;
