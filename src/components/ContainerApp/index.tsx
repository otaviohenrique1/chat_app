import { ReactNode } from "react";
import { Container } from "reactstrap";
import { HeaderApp } from "../HeaderApp";

interface ContainerAppProps {
  children: ReactNode;
}

export function ContainerApp(props: ContainerAppProps) {
  return (
    <>
      <HeaderApp />
      <Container>{props.children}</Container>
    </>
  );
}