import { useState, useOptimistic  } from 'react';

export default function LikeButton() {
  // Número inicial de curtidas
  const [likes, setLikes] = useState(100);

  // Configura o estado otimista
  const [optimisticLikes, addOptimisticLike] = useOptimistic(likes, (currentLikes) => currentLikes + 1);

  // Função para lidar com a ação de "Curtir"
  async function handleLike() {
    addOptimisticLike(); // Atualiza o número de curtidas imediatamente
    await sendLikeToServer(); // Aguarda a confirmação do servidor
  }

  // Simula a requisição ao servidor para registrar a curtida
  async function sendLikeToServer() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

  return (
    <div>
      <button onClick={handleLike}>
        Curtir ({optimisticLikes})
      </button>
    </div>
  );
}