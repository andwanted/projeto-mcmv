const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rota de recebimento das informações
app.post("/enviar", async (req, res) => {
  const { nome, telefone, endereco, email, estadoCivil, rendaMensal, numeroPessoas, possuiImovel, recebeBeneficioSocial, resideCidade } = req.body;

  // Lógica para processar as informações (exemplo de condicional)
  let status = "verificado";
  if (rendaMensal < 1000) {
    status = "não qualificado";
  }

  // Enviar os dados para o Google Sheets
  try {
    await enviarParaPlanilha(nome, telefone, endereco, email, estadoCivil, rendaMensal, numeroPessoas, possuiImovel, recebeBeneficioSocial, resideCidade, status);
    res.status(200).send({ message: "Informações enviadas com sucesso!" });
  } catch (error) {
    res.status(500).send({ message: "Erro ao enviar as informações." });
  }
});

// Função para enviar os dados para o Google Sheets
const { google } = require("googleapis");
const credentials = require("./credentials.json"); // Arquivo com as credenciais de acesso à API do Google Sheets

async function enviarParaPlanilha(nome, telefone, endereco, email, estadoCivil, rendaMensal, numeroPessoas, possuiImovel, recebeBeneficioSocial, resideCidade, status) {
  const auth = new google.auth.GoogleAuth({
    keyFile: "credentials.json", // Caminho do arquivo JSON com as credenciais
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = "SUA_PLANILHA_ID"; // Substitua com o ID da sua planilha do Google Sheets

  const range = "Sheet1!A1"; // Substitua pelo nome da aba da sua planilha

  const valores = [
    [nome, telefone, endereco, email, estadoCivil, rendaMensal, numeroPessoas, possuiImovel, recebeBeneficioSocial, resideCidade, status],
  ];

  const resource = {
    values: valores,
  };

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "RAW",
    resource,
  });
}

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
