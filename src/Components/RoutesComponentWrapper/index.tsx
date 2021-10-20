import Container from "@mui/material/Container";
import Props from "./routes.interface";

const RoutesComponentWrapper = ({ child1, child2, child3 }: Props) => {
  return (
    <Container>
      {child1}
      {child2}
      {child3}
    </Container>
  );
};

export default RoutesComponentWrapper;
