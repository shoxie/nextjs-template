import { Box, Container } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Box as="main">
        <Container maxW={"container.xl"}>{children}</Container>
      </Box>
    </>
  );
}
