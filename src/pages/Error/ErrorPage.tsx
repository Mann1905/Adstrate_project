import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../../components/common/Button/Button';

interface ErrorPageProps {
  statusCode?: number;
  message?: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ 
  statusCode = 404, 
  message = 'Page not found' 
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <Helmet>
        <title>{statusCode} - {message}</title>
        <meta name="description" content={`Error ${statusCode}: ${message}. The page you're looking for doesn't exist.`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 style={{ fontSize: '6rem', margin: 0, color: '#dc3545' }}>
        {statusCode}
      </h1>
      <h2 style={{ marginTop: '1rem', color: '#212529' }}>{message}</h2>
      <p style={{ marginTop: '1rem', color: '#6c757d' }}>
        The page you're looking for doesn't exist.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Button 
          variant="primary" 
          onClick={() => navigate('/')}
        >
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;

