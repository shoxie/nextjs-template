import { useTranslation } from "react-i18next";
import { Box, Heading, Button, VStack } from "@chakra-ui/react";

export default function Home() {
  const { t, i18n } = useTranslation();

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
        <Heading>{t("welcome")}</Heading>
      </VStack>
    </Box>
  );
}
