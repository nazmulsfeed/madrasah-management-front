import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HifzPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/homework?tab=hifz', { replace: true });
  }, [navigate]);

  return null;
}
