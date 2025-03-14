useEffect(() => {
  document.title = siteName;
  // Sempre que siteName (uma variável qualquer) for alterada então execute este hook novamente e mude o título da página.
}, [siteName])