import { useState } from 'react';
import html2canvas from 'html2canvas';
import { TextField, Button, Container, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import background from '/home/alex1986/entrada_mudanza_xiris/src/assets/AUTORIZACION DE MUDANZA.jpg';

function Form() {
  const [formData, setFormData] = useState({
    fechaHora: '',
    unidadPrivativa: '',
    tipoResidente: 'Residente',
    nombreResidente: '',
    telefonoInquilino: '',
    caracteristicasCamion: '',
    empresaMudanza: '',
    datosChofer: '',
    notas: '',
    nombreCondominio: 'Xiris',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerateImage = () => {
    const input = document.getElementById('capture');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const link = document.createElement('a');
      link.href = imgData;
      const fileName = `Autorizacion_Mudanza_${formData.nombreCondominio.toUpperCase()}_${formData.unidadPrivativa}.jpg`;
      link.download = fileName;
      link.click();
    });
  };

  const formatText = (text, maxLength) => {
    const lines = [];
    let currentPosition = 0;

    while (currentPosition < text.length) {
      lines.push(text.slice(currentPosition, currentPosition + maxLength));
      currentPosition += maxLength;
    }

    return lines;
  };

  return (
    <Container>
      <form>

        <TextField
          fullWidth
          margin="normal"
          label="Fecha y Hora"
          variant="outlined"
          name="fechaHora"
          value={formData.fechaHora}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Número de Vivienda"
          variant="outlined"
          name="unidadPrivativa"
          value={formData.unidadPrivativa}
          onChange={handleChange}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="tipo-residente-label">Tipo de Residente</InputLabel>
          <Select
            labelId="tipo-residente-label"
            name="tipoResidente"
            value={formData.tipoResidente}
            onChange={handleChange}
          >
            <MenuItem value="Residente">Residente</MenuItem>
            <MenuItem value="Inquilino">Inquilino</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          margin="normal"
          label="Nombre del Residente/Inquilino"
          variant="outlined"
          name="nombreResidente"
          value={formData.nombreResidente}
          onChange={handleChange}
        />

        {formData.tipoResidente === 'Inquilino' && (
          <TextField
            fullWidth
            margin="normal"
            label="Teléfono del Inquilino"
            variant="outlined"
            name="telefonoInquilino"
            value={formData.telefonoInquilino}
            onChange={handleChange}
          />
        )}

        <TextField
          fullWidth
          margin="normal"
          label="Características del Camión"
          variant="outlined"
          name="caracteristicasCamion"
          value={formData.caracteristicasCamion}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Empresa de Mudanza"
          variant="outlined"
          name="empresaMudanza"
          value={formData.empresaMudanza}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Datos del Chofer y Trabajadores"
          variant="outlined"
          name="datosChofer"
          value={formData.datosChofer}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          margin="normal"
          label="Notas"
          variant="outlined"
          name="notas"
          value={formData.notas}
          onChange={handleChange}
          multiline
          rows={4}
        />

        <Button
          variant="contained"
          style={{ backgroundColor: '#26A9E1', color: '#FFFFFF', marginTop: '20px' }}
          onClick={handleGenerateImage}
        >
          Generar Imagen
        </Button>
      </form>

      {/* Captura de imagen */}
      <div id="capture" style={{ position: 'absolute', left: '-9999px', width: '800px', height: '1000px' }}>
        <img src={background} alt="Formato" style={{ width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', top: '430px', left: '275px', color: 'black', fontSize: '18px' }}>
          {formData.fechaHora}
        </div>
        <div style={{ position: 'absolute', top: '530px', left: '278px', color: 'black', fontSize: '18px' }}>
          {formData.unidadPrivativa}
        </div>
        <div style={{ position: 'absolute', top: '575px', left: '274px', color: 'black', fontSize: '18px' }}>
          {formData.nombreResidente}
        </div>
        {formData.tipoResidente === 'Inquilino' && (
          <div style={{ position: 'absolute', top: '575px', left: '490px', color: 'black', fontSize: '18px' }}>
            Tel: {formData.telefonoInquilino}
          </div>
        )}
        <div style={{ position: 'absolute', top: '630px', left: '275px', color: 'black', fontSize: '18px', whiteSpace: 'pre-wrap' }}>
          {formatText(formData.caracteristicasCamion, 34).map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div style={{ position: 'absolute', top: '730px', left: '275px', color: 'black', fontSize: '18px' }}>
          {formData.empresaMudanza}
        </div>
        <div style={{ position: 'absolute', top: '775px', left: '275px', color: 'black', fontSize: '18px', whiteSpace: 'pre-wrap' }}>
          {formatText(formData.datosChofer, 43).map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div style={{ position: 'absolute', top: '850px', left: '275px', color: 'black', fontSize: '18px', whiteSpace: 'pre-wrap' }}>
          {formatText(formData.notas, 36).map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        <div style={{ position: 'absolute', top: '254px', left: '564px', color: 'white', fontSize: '48px', textTransform: 'uppercase' }}>
          {formData.nombreCondominio}
        </div>
      </div>
    </Container>
  );
}

export default Form;
