import { useAppDispatch } from "hooks/reduxHooks";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchCharacters } from "redux/characters/charactersOperations";
import { useDebounce } from "use-debounce";

import st from 'components/Filter/Filter.module.scss';
import { BiSearchAlt2 } from 'react-icons/bi';

const Filter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('name');

  const [value, setValue] = useState(queryParam ? queryParam : '');
  const [debouncedValue] = useDebounce(value, 500);

  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(fetchCharacters(debouncedValue))
  }, [dispatch, debouncedValue])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setSearchParams({ name: e.target.value })
  }

  return (
    <div className={st.wrapper}>
      <BiSearchAlt2 className={st.icon} />
      <input
        onChange={handleChange}
        type="text"
        name="filter"
        value={value}
        placeholder='Filter by name...'
        className={st.filter}
      />
    </div>
  )
}

export default Filter
