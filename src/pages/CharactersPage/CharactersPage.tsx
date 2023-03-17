import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharactersFromAPI } from "api/API";
import { Logo, Filter, Cards, Pagination } from "components";
import { CharacterType } from "dto/CharacterType";

const CharactersPage: React.FC = () => {
  const [data, setData] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);
  const [pages, setPages] = useState<string | null>('');

  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('name');
  const queryPage = searchParams.get('page');

  useEffect(() => {
    if (Number(queryPage) < 1) {
      setSearchParams({ name: queryName || '', page: '1' });
    }
    setPages(queryPage)
  }, [])
  
  const getItems = useCallback(async () => {
    const res = await fetchCharactersFromAPI({ name: queryName, page: queryPage })
    setData(res.results)
    setPages(String(res.info.pages))
  }, [queryName, queryPage]) 

  useEffect(() => {
    setIsLoading(true)
    try {
      getItems()
    } catch (error) {
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }, [getItems])

  return (
    <>
      <Logo />
      <Filter/>
      <Cards items={data} isLoading={isLoading} error={error} />
      <Pagination pages={pages} />
    </>
  )
}

export default CharactersPage;
