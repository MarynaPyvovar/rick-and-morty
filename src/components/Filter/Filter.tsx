import { useAppDispatch } from "hooks/reduxHooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharacters } from "redux/characters/charactersOperations";
// import { setFilter } from "redux/filter/filterOperations";
import { useDebounce } from "use-debounce";

const Filter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('name');

  const [value, setValue] = useState(queryParam? queryParam : '');
  const [debouncedValue] = useDebounce(value, 500);

  const dispatch = useAppDispatch();

  // useEffect(() => {setValue(queryParam)}, [])
  
  useEffect(() => {
    // setValue(queryParam)
    // dispatch(setFilter(debouncedValue));
    dispatch(fetchCharacters(debouncedValue))
  }, [dispatch, debouncedValue, queryParam])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setSearchParams({ name: e.target.value })
  }

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        value={value}
        placeholder='Filter by name...'
      />
    </div>
  )
}

export default Filter
