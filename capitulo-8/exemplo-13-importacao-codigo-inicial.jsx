if (window.location.pathname === '/url-path-name1') {
  import('./ComponentRoute1').then((module) => {
    const ComponenteRota1 = module.default;
    // mais coisas
  });
} else if (window.location.pathname === './url-path-name-2') {
  import('./ComponentRoute2').then((module) => {
    const ComponenteRota2 = module.default;
    // muito código e felicidade
  });
}