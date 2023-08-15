function incentivarQuester(msg, ...quester) {
  quester.map((quester) => {
    console.log(msg, quester);
  });
}

incentivarQuester(
  "parabéns por ter terminado o módulo de js avançado",
  "joao",
  "pedro",
  "maria"
);
