const mockCompany = {
  "country": "US",
  "currency": "USD",
  "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
  "ipo": "1980-12-12",
  "marketCapitalization": 1415993,
  "name": "Apple Inc",
  "phone": "14089961010",
  "shareOutstanding": 4375.47998046875,
  "ticker": "AAPL",
  "weburl": "https://www.apple.com/",
  "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
  "finnhubIndustry":"Technology"
}

const mockQuoute = {
  "c": 261.74,
  "h": 263.31,
  "l": 260.68,
  "o": 261.07,
  "pc": 259.45,
  "t": 1582641000,
  "d": 12312,
  "dp": 12312
}

const mockHistoricalData = {
  "c": [
    217.68,
    221.03,
    219.89
  ],
  "h": [
    222.49,
    221.5,
    220.94
  ],
  "l": [
    217.19,
    217.1402,
    218.83
  ],
  "o": [
    221.03,
    218.55,
    220
  ],
  "s": "ok",
  "t": [
    1569297600,
    1569384000,
    1569470400
  ],
  "v": [
    33463820,
    24018876,
    20730608
  ]
}

export type Quote = typeof mockQuoute
export type StockDetails = typeof mockCompany
export type HistoricalData = typeof mockHistoricalData

