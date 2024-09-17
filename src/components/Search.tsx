'use client'
import { ChangeEvent, useCallback, useEffect, useState,useRef } from "react"
import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { searchQuery } from "@/api/search"

type SearchResult = {
  description: string
  displaySymbol: string
  symbol: string
  type: string
}

const Search = () => {
  const [value, setValue] = useState<string | null>('')
  const [matches, setchMatches] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null)
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const clear = useCallback(() => {
    setValue('')
    setchMatches([])
  }, [value, matches])
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleSetSymbol = useCallback((symbol: string) => {

    const queryString = createQueryString('symbol', symbol);
    clear()
    router.push(`${pathname}?${queryString.toString()}`)
  }, [router, pathname])
  
  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const handleKeyDown = useCallback(async (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const data = await searchQuery(value) 
      const result = data.result;
      if (data.result && data.count) {
        setchMatches(result as SearchResult[])
      } else {
        setchMatches([])
        setError('No symbol found')
      }
    }
  }, [value, searchQuery])

  return (
    <div className="flex items-center my-4 border-2 rounded-md relative z-50 w-96">
      <input
        type="text"
        value={value as any}
        className="w-full px-4 py-2 focus:outline-none rounded-md"
        placeholder="Search stock and press enter..."
        onChange={handleChangeInput}
        onKeyDown={handleKeyDown}
      />
      {value && (
        <button onClick={clear} className="m-1 fill-gray-500">
          <CloseOutlined className="h-4 w-4" />
        </button>
      )}
      <button
        className="h-8 w-8 rounded-md flex justify-center items-center m-1 p-2 transition duration-300"
      >
        <SearchOutlined className="h-4 w-4" />
      </button>
      {(matches as SearchResult[])?.length > 0 ? (
          <ul
            className='absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-white border-neutral-200 custom-scrollbar'
          >
            {(matches as SearchResult[])?.map((item) => {
              return (
                <li
                  key={item.symbol}
                  className='cursor-pointer p-4 m-2 flex items-center justify-between rounded-md hover:bg-blue-200 transition duration-300'
                  onClick={() => handleSetSymbol(item.symbol)}
                >
                  <span>{item.symbol}</span>
                  <span className="max-w-[250px] text-ellipsis">{item.description}</span>
                </li>
              );
            })}
          </ul>
      ) : null}
      {error && (
        <div className="text-rose-800">
          {error}
        </div>
      )}
    </div>
  )
}

export default Search