import React from "react";

import { Box, Divider, Typography } from "@mui/material";

import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import CustomizedTable from "./components/Table/table";

import { TEXTS } from "./content/literals";

export const Price: React.FC = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          p: "20px",
        }}
      >
        <Typography component="h4" variant="h6">
          Políticas de Precios
        </Typography>
        <Divider />

        <CustomizedTable />

        <Typography component="h4" variant="h6">
          Condiciones de Pago
        </Typography>
        <Divider />
        <Typography sx={{ marginBottom: "10px" }}>
          Ofrecemos flexibilidad en las condiciones de pago para adaptarnos a la
          realidad financiera de las PYMES locales. Las opciones de pago
          incluyen plazos fraccionados, acuerdos personalizados y descuentos por
          pagos anticipados para incentivar la prontitud en los procesos de
          facturación.
        </Typography>

        <Typography component="h4" variant="h6">
          Descuentos
        </Typography>
        <Divider />
        <Typography sx={{ marginBottom: "10px" }}>
          Blue Tech implementa una política de descuentos estratégicos.
          Ofrecemos descuentos a empresas que contraten múltiples servicios o
          que se comprometan a colaboraciones a largo plazo. También
          proporcionamos descuentos especiales a nuevas PYMES que se unan a la
          transformación digital de la mano de Blue Tech.
        </Typography>
        <Typography component="h4" variant="h6">
          Razonamientos y Estrategia
        </Typography>
        <Divider />
        {TEXTS.map((text, index) => (
          <Typography key={`text-${index}`} sx={{ marginBottom: "10px" }}>
            {text}
          </Typography>
        ))}
      </Box>
      <Footer />
    </>
  );
};
