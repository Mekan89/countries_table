import styled from "@emotion/styled";
import Box from "@mui/system/Box";

export const Flex = styled(Box)({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
});

export const FlexBetween = styled(Flex)({
    justifyContent: "space-between",
});

export const Center = styled(Flex)({
    justifyContent: "center",
});
