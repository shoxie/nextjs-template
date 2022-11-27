import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

// Providers
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

// lib
import theme from "@/lib/theme";
import i18n from "@/lib/i18n";

// misc
import DefaultLayout from "@/layouts/default";

//initialization
i18n.init();
const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout?: any } }) {
  const LayoutWrapper = Component.Layout || DefaultLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
