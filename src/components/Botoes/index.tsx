import { Button, ButtonProps } from "reactstrap";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { To, Link } from "react-router-dom";

interface BotaoProps extends ButtonProps {
  children: ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  type: "button" | "reset" | "submit";
}

export function Botao(props: BotaoProps) {
  return (
    <Button {...props} color={props.color} type={props.type}>
      {props.children}
    </Button>
  );
}

interface BotaoLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  to: To;
}

export function BotaoLink(props: BotaoLinkProps) {
  return (
    <Link {...props} className={`btn btn-${props.color}`} to={props.to}>{props.children}</Link>
  );
}
