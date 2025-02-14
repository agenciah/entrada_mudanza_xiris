import React from 'react';
import Form from './form';
import { Container, Typography, Box, useMediaQuery } from '@mui/material';
import residenza_logo from "/home/alex1986/entrada_mudanza_xiris/src/assets/Residenza_logo.jpg";
import xiris_logo from "/home/alex1986/entrada_mudanza_xiris/src/assets/logo_xiris ac.png";

function App() {
  const isMobile = useMediaQuery('(max-width:600px)'); // Detecta si el ancho es menor a 600px

  return (
    <Container className="App">
      <Box 
        display="flex" 
        flexDirection="column" // Siempre vertical en móvil
        justifyContent="center" 
        alignItems="center"
        position="relative"
        padding="10px"
        sx={{ height: '10vh' }} // Aseguramos que la caja ocupe toda la altura
      >
        {/* Logo Residenza - Esquina superior izquierda */}
        <img 
          src={residenza_logo} 
          alt="Residenza Logo" 
          style={{
            width: isMobile ? '60px' : '120px',
            height: 'auto',
            position: 'absolute',
            top: '10px',
            left: '10px',
          }} 
        />

        {/* Logo Xiris - Esquina superior derecha */}
        <img 
          src={xiris_logo} 
          alt="Xiris Logo" 
          style={{
            width: isMobile ? '60px' : '120px',
            height: 'auto',
            position: 'absolute',
            top: '30px',
            right: '10px',
          }} 
        />
      </Box>

      {/* Título - Centrado */}
      <Typography 
          variant={isMobile ? "h5" : "h3"} 
          component="h1" 
          sx={{ color: '#262161', textAlign: 'center', flex: 1 }}
        >
          Formulario de Mudanza
        </Typography>

      <Form />
    </Container>
  );
}

export default App;
