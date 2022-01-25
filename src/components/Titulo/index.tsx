import { HTMLAttributes, ReactNode } from "react";

interface TituloProps extends HTMLAttributes<HTMLHeadingElement> {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ;
  children: ReactNode;
}

export function Titulo(props: TituloProps) {
  const Tag = props.tag;
  return (
    <Tag {...props}>{props.children}</Tag>
  );
}

/*
function TituloExemplo() {
  return (
    <div>
      <Titulo tag="h1">H1</Titulo>
      <Titulo tag="h2">H2</Titulo>
      <Titulo tag="h3">H3</Titulo>
      <Titulo tag="h4">H4</Titulo>
      <Titulo tag="h5">H5</Titulo>
      <Titulo tag="h6">H6</Titulo>
    </div>
  );
}
*/