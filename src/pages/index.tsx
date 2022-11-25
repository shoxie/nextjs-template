import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

import React from "react";
import { Box, Heading, Button, VStack } from "@chakra-ui/react";

import ExampleApi from "@/api/example";

export default function Home() {
  const { t, i18n } = useTranslation();
  const { data, isLoading } = useQuery(["example"], () => ExampleApi.getList());

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  return (
    <Box h="100vh">
      <VStack minH="100vh" alignItems={"center"} justifyItems={"center"}>
        <Button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "vi" : "en")
          }
        >
          Click me to change language
        </Button>
        <Heading as="h1">{t("welcome")}</Heading>
      </VStack>
    </Box>
  );
}
