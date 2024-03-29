import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { selectCharacters } from 'redux/characters/charactersSelectors';
import { useAppSelector } from 'hooks/reduxHooks';

import st from 'components/Pagination/Pagination.module.scss';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const Pagination: React.FC = () => {
  const { pages, error } = useAppSelector(selectCharacters);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name');
  const pageParam = searchParams.get('page');

  const onNextClick = () => {
    const newPage = pageParam ? String(Number(pageParam) + 1) : String(1 + 1);
    setSearchParams({ name: nameParam as '', page: newPage as '' });
  }

  const onPrevClick = () => {
    const newPage = pageParam ? String(Number(pageParam) - 1) : String(1 - 1);
    setSearchParams({ name: nameParam as '', page: newPage });
  }

  const validCurrentPage = Number(pageParam) > 0 ? Number(pageParam): 1;

  return (
    <div className={st.wrapper}>
      {!error && <><button
        disabled={validCurrentPage === 1}
        onClick={onPrevClick}
        className={st.button}
      >
        <AiOutlineArrowLeft />
      </button>
      <p className={st.pages}>{validCurrentPage} of {pages}</p>
      <button
        onClick={onNextClick}
        disabled={pageParam === pages}
        className={st.button}
      >
        <AiOutlineArrowRight />
      </button></>}
    </div>
  )
}

export default Pagination
