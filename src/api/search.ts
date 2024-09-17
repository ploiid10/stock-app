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
