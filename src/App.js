import React from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCpf, validarSenha } from "./models/cadastro";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCpf, senha: validarSenha }}
      >
        <FormularioCadastro onSubmit={onSubmitHandler} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function onSubmitHandler(dados) {
  console.log(dados);
}

export default App;
