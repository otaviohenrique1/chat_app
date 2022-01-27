import { Status } from "./constantes";

export const usuario_logado = {
  id_usuario: '10',
  nome: 'Lola',
};

export const lista_usuarios = [
  { id_usuario: '09', nome: 'Juca', status: Status.OFFLINE },
  { id_usuario: '87', nome: 'Leticia', status: Status.ONLINE },
  { id_usuario: '12', nome: 'Jeca', status: Status.AUSENTE },
  { id_usuario: '15', nome: 'Maria', status: Status.ONLINE },
  { id_usuario: '66', nome: 'Ana', status: Status.OFFLINE },
  { id_usuario: '88', nome: 'Sara', status: Status.AUSENTE },
  { id_usuario: '11', nome: 'Jana', status: Status.AUSENTE },
  { id_usuario: '19', nome: 'Jaca', status: Status.OFFLINE },
  { id_usuario: '05', nome: 'Mara', status: Status.OFFLINE },
  { id_usuario: '02', nome: 'Lana', status: Status.AUSENTE },
  { id_usuario: '45', nome: 'Helena', status: Status.AUSENTE },
  { id_usuario: '31', nome: 'Julia', status: Status.AUSENTE },
  { id_usuario: '85', nome: 'Luana', status: Status.ONLINE },
  { id_usuario: '79', nome: 'Gabriela', status: Status.ONLINE },
  { id_usuario: '62', nome: 'Maisa', status: Status.OFFLINE },
  { id_usuario: '28', nome: 'Marina', status: Status.OFFLINE },
];

export const conversa_Lola_Maria = [
  {
    id_usuario: '10',
    nome: 'Lola',
    data: '26/01/2022 - 15:00',
    comentario: 'Ola, tudo bem com voce',
  },
  {
    id_usuario: '15',
    nome: 'Maria',
    data: '26/01/2022 - 15:01',
    comentario: 'Tudo e com voce?',
  },
  {
    id_usuario: '10',
    nome: 'Lola',
    data: '26/01/2022 - 15:02',
    comentario: 'Voce viu o cometa no ceu ontem?',
  },
  {
    id_usuario: '15',
    nome: 'Maria',
    data: '26/01/2022 - 15:03',
    comentario: 'Sim, eu vi e achei bem bonito',
  },
];
