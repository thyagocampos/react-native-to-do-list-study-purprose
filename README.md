# Lista de Tarefas (React Native / Expo)

Aplicativo simples de lista de tarefas criado com React Native e Expo. Projeto usado para estudo, com interface básica exibindo um título, uma imagem de check e um botão para interações.

## Tecnologias

- React Native
- Expo
- TypeScript

## Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o projeto com o Expo:

   ```bash
   npx expo start
   ```

3. Escolha uma das opções que aparecem no terminal:

- Abrir no aplicativo Expo Go (Android/iOS)
- Abrir em um emulador Android
- Abrir em um simulador iOS (no macOS)

## Estrutura do projeto

- `app/_layout.tsx`: entrada principal da interface, onde são renderizados o texto "Minhas tarefas", a imagem `check.png` e o botão `+`.
- `assets/images/check.png`: ícone usado na tela principal.

## Próximos passos (ideias)

- Criar componente para item de tarefa.
- Permitir adicionar novas tarefas via input.
- Marcar/desmarcar tarefas concluídas.
- Persistir tarefas localmente (AsyncStorage ou similar).

## Licença

Projeto para fins de estudo. Use e adapte como quiser.
