const basePath = "https://finnhub.io/api/v1"

// Find/search stock that matches the query
export const searchQuery = async (query: string | number | null): Promise<any> => {
  const url = `${basePath}/search?q=${query}&token=${process.env.API_KEY}`

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
}


// Fetch quote of stock
export const searchQuote = async (stockSymbol: string) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${process.env.API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

// Fetch stock details
export const searchStockDetails = async (stockSymbol: string) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${process.env.API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};


export const searchHistoricalData = async (stockSymbol: string) => {
  // set to 1 day
  const resolution = "D"
// Unix timestamp for today (start of the day)
  const today = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);
  // Unix timestamp for yesterday (start of the day)
  const yesterday = Math.floor(new Date().setHours(-24, 0, 0, 0) / 1000);

  const url = `${basePath}/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${yesterday}&to=${today}&token=${process.env.API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};