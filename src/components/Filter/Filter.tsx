import { useAppDispatch } from "hooks/reduxHooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { setFilter } from "redux/filter/filterOperations";
import { useDebounce } from "use-debounce";

const Filter: React.FC = () => {
  const [value, setValue] = useState('');
  const [debouncedValue] = useDebounce(value, 500);

  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('name') ?? value;

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    setValue(queryParam)
    dispatch(setFilter(debouncedValue));
  }, [debouncedValue, dispatch, queryParam])

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
