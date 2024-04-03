import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import ArabicForm from '../../components/Form/ArabicForm';

import { Link } from 'react-router-dom';

const AddProperties = () => {
  const [language, setLanguage] = useState('english'); // State to track language selection

  const renderForm = () => {
    if (language === 'english') {
      return <Form />;
    } else if (language === 'arabic') {
      return <ArabicForm />;
    }
  };

  return (
    <div>
     
      <div className='px-10 flex justify-between w-full items-center'>
        <Link onClick={() => setLanguage('english')}>English</Link>
        <Link onClick={() => setLanguage('arabic')}>Arabic</Link>
      </div>
      {renderForm()}
      
      
    </div>
  );
};

export default AddProperties;
