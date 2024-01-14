import { styled } from "@mui/system";

import { Button as BaseButton } from "@mui/base/Button";

import { blue, grey } from "../../constants/colors";

export const ButtonContainer = styled(BaseButton)(
  ({ theme }) => `
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 1.5;
      padding: 8px 16px;
      border-radius: 8px;
      color: white;
      transition: all 150ms ease;
      cursor: pointer;
      background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
      border: 1px solid ${
        theme.palette.mode === "dark" ? grey[700] : grey[200]
      };
      color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    
      &:hover {
        background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
        border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
      }
    
      &:active {
        background: ${theme.palette.mode === "dark" ? grey[700] : grey[100]};
      }
    
      &:focus-visible {
        box-shadow: 0 0 0 4px ${
          theme.palette.mode === "dark" ? blue[300] : blue[200]
        };
        outline: none;
      }
      `
);
