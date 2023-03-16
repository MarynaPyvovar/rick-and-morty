import React from 'react';
import st from 'pages/NotFoundPage/NotFoundPage.module.scss';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <h1 className={st.text}>We don't have any page in this directory :(
        <br />
        Please, write the correct one</h1>
    </>
  )
}

export default NotFoundPage

