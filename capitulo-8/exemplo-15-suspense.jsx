import { lazy , Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <h1>Bem-vindo ao meu site!</h1>

      {/* Usamos o Suspense para exibir um fallback enquanto o componente carrega */}
      <Suspense fallback={<div>Carregando...</div>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;