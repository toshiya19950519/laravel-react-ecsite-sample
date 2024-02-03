import React from 'react';
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { theme } from '../resources/ts/styles/theme';
import { AuthProvider } from "../resources/ts/context/AuthContext";
import { BrowserRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <AuthProvider>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>
  ),
];