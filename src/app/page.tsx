'use client'
import { searchQuote, searchStockDetails } from "@/api/search";
import Details from "@/components/Details";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import { Quote, StockDetails } from "@/constants/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams()
  const stockSymbol = useMemo(() => searchParams.get('symbol'), [searchParams])
  const [quote, setQuote] = useState<Quote>({} as Quote);
  const [stockDetails, setStockDetails] = useState<StockDetails>({} as StockDetails)
  useEffect(() => {
    if (stockSymbol) {
      const updateQuoute = async () => {
        try {
          const result = await searchQuote(stockSymbol);
          setQuote(result as Quote);
        } catch (error) {
          setQuote({} as Quote);
          console.error(error);
        }
      };
  
      const updateStockDetails = async () => {
        try {
          const result = await searchStockDetails(stockSymbol);
          setStockDetails(result as StockDetails);
        } catch (error) {
          setStockDetails({} as StockDetails);
          console.error(error);
        }
      };
      updateQuoute();
      updateStockDetails();
    }
  }, [stockSymbol])

  return (
    <div
      className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
      grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10
      font-quicksand"
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
        <Header name={stockDetails?.name} />
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={stockDetails}  />
      </div>
      <div>
        <Overview
          symbol={stockSymbol as string}
          price={quote.pc}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
      </div>
    </div>
  );
}
