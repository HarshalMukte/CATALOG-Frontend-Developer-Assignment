export function generateFakeData(days: number, start: number, volatility: number) {
    const data: number[] = [];
    let current = start;
  
    for (let i = 0; i < days; i++) {
      const change = (Math.random() * 2 - 1) * volatility; // Random percentage change
      current = Math.max(0, current + change); // Ensure no negative values
      data.push(current);
    }
  
    return data;
  }
  