import React, { useContext } from "react";
import Box from "./Box";
const detailsList = {
  name: "Name",
  country: "Country",
  currency: "Currency",
  exchange: "Exchange",
  ipo: "IPO Date",
  marketCapitalization: "Market Capitalization",
  finnhubIndustry: "Industry",
};

const convertMillionToBillion = (num: number) => {
  return (num / 1000).toFixed(2);
};

const Details = ({ details }: any) => {
  return (
    <Box>
      <ul
        className="w-full h-full flex flex-col justify-between divide-y-1"
      >
        {Object.keys(detailsList).map((item) => {
          return (
            <li key={item} className="flex-1 flex justify-between items-center">
              <span>{detailsList[item as  keyof typeof detailsList]}</span>
              <span className="font-bold">
                {item === "marketCapitalization"
                  ? `${convertMillionToBillion(details[item])}B`
                  : details[item]}
              </span>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default Details;