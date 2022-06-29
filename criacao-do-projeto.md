## PASSO A PASSO PARA CRIAÇÃO DE UM PROJETO COM VITE
    - O que é o vite: É uma ferramenta que permite com os browsers entendam as novas versões do react.

    1. No seu CMD, digite o seguinte comando: npm create vite@latest;
    2. Escolha um nome para seu projeto
    3. Selecione a ferramenta REACT na opçõe do React;
    4. Selecione a forma como deseja programar: Typescript(react-ts) ou Javascript(react);
    5. Após isso espere a criação do projeto, após isso entre na pasta que você criou;
    6. Por fim, digite no terminal o comando: npm install;

## CONFIGURANDO O .ENV COM VITE
    1. Procura na internet o vite env

## CONFIGURANDO O TAILWIND DENTRO DO PROJETO

    1. Primeiramento, instale a dependencia do tailwindcss com o comando: npm install -D tailwindcss postcss autoprefixer;
    2. Após isso, rode o comando: npx tailwindcss init -p;
    3. Com o fim dessas primeiras etapas, vai ser criado um arquivo chaamdo: tailwind.config.js. Abra este arquivo;
    4. Dentro deste arquivo dentro do module.exports, dentro de content copie este comando content: ["./src/**/*.tsx"];
        OBS: caso esteja trabalhando com extensão .js utilize content: ["./src/**/*.{html,js}"],
    5. Após isso, crie um arquivo dentro de ./src com o nome de global.css;
    6. Entre no arquivo global.css e digite esses 3 comandos:
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    7. Importe dentro do arquivo main.tsx o global.css;

## OBSERVAÇÕES INTERESSANTES REFERENTES AO TAILWIND

    Dentro do arquivo de configuração do tailwind, você consegue sobrescrever e criar estilos que o tailwind
    possui ou não possui.
        - No caso isso é feito de forma simples, basicamente entre no arquivo do tailwind.config.js

    Aqui está um exemplo simples de como você pode sobrescrever e criar seus estilos no tailwind.
        Ex.: module.exports = {
                content: ["./src/**/*.tsx"],
                theme: {
                    extend: {
                    colors: {
                        brand: {
                        300: "#996DFF",
                        500: "#8257E6"
                        }
                    },
                    borderRadius: {
                        md: '4px'
                    }
                    },
                },
                plugins: [
                    require('@tailwindcss/forms'),
                    require('tailwind-scrollbar'),
                ],
            }

    Também tem estilização para formulários e para scrollbars, para mais informações ver a documentação do tailwind.
