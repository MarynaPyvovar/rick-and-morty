import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import st from 'components/Filter/Filter.module.scss';
import { BiSearchAlt2 } from 'react-icons/bi';

const Filter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name');

  const [value, setValue] = useState(nameParam ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setSearchParams({ name: e.target.value, page: '1' })
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
