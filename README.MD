<div align="center">
  <img src="/assets/escribo-img.png" alt="Banner-project" />
</div>

## SOBRE O PROJETO 🚀

O projeto consiste em um desafio técnico para a vaga de estágio da Escribo Inovação para o aprendizado e o objetivo dele é desenvolver uma API RESTFUL para autenticação de usuários, que permite cadastro (Sign up) , login (Sign in) e recuperação de dados do usuário, tudo feito usando [Node.js](https://nodejs.org/en/download)

## 👨‍🏭 Desafio

    →  Cadastro de novos usuários

    →  Login (Autenticação) de usuários

    →  Busca de informações do usuário

<br>

## Caso queira utilizar a API sem subir localmente, ela está hospedada em um servidor próprio no seguinte endereço: <br>

## http://cloudy-server.ddns.net:8080 ❤️

<br>

<details>
<summary>
Rotas
</summary>
Cadastro (SIGN UP) -> "/signup"
<br>
Login (SIGN IN) -> "/signin"
<br>
Buscar Usuário por ID(getUsers) -> "/user/:id"
</details>

## ✔️ Request SIGN UP (Sucesso)

<div align="center">
  <img src="/assets/signup-certo.png" alt="Banner-project" />
</div>

## ❌ Request Faltando parâmetros (Falha)

<div align="center">
  <img  src="/assets/signup-errado-01.png" alt="Banner-project" />
</div>

## ❌ Request com E-mail já cadastrado (Falha)

<div align="center">
  <img  src="/assets/signup-errado-02.png" alt="Banner-project" />
</div>

## ✔️ Request Busca de usuário (Sucesso)

<div align="center">
  <img  src="/assets/busca-certo.png" alt="Banner-project" />
</div>

## ❌ Request Busca de usuário com id inexistente (Falha)

<div align="center">
  <img  src="/assets/busca-errado.png" alt="Banner-project" />
</div>

## ✔️ Request Login (Sucesso)

<div align="center">
  <img  src="/assets/login-certo.png" alt="Banner-project" />
</div>

## ❌ Request com senha errada (Falha)

<div align="center">
  <img  src="/assets/login-errado.png" alt="Banner-project" />
</div>

## ❌ Request com email errado (Falha)

<div align="center">
  <img  src="/assets/login-errado-02.png" alt="Banner-project" />
</div>

## 🔧 Tools

- [Node](https://nodejs.org) 💚
- [Express](https://expressjs.com/pt-br/)💚
- [Mysql2](https://www.npmjs.com/package/mysql2)

## 👨‍💻 Como utilizar

## instalar o MYSQL

```bash
$ sudo apt install mysql-server
```

## Clone o projeto

```bash
$ git clone https://github.com/Berto021/desafio02-escribo.git
```

## Entre no diretório

```bash
$ cd desafio02-escribo
```

## Crie as tabelas

```bash
$ CREATE TABLE users(
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100) NOT NULL,
 email VARCHAR(50) NOT NULL,
 senha VARCHAR(100) NOT NULL,
 telefones VARCHAR(255) NOT NULL,
 data_criacao DATETIME NOT NULL,
 data_atualizacao DATETIME NOT NULL,
 ultimo_login DATETIME NOT NULL,
 token VARCHAR(255) NOT NULL,
 UNIQUE KEY (email)
)
```

## Suba o servidor local

```bash
$ node server.js
```


## Pronto, sua API está disponível na porta 8080, http://localhost:8080
