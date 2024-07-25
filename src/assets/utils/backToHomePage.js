import { useNavigate } from 'react-router-dom';

const useHandleClickBackToHP = () => {
  const navigate = useNavigate();
  
  const handleClickBackToHP = () => {
    navigate('/');
  };

  return handleClickBackToHP;
};

export default useHandleClickBackToHP;
