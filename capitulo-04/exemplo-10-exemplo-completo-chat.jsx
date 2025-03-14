import React, { useState, useEffect, useCallback } from 'react';
import { logChat } from './log';

function ChatComponent({ initialTicket, userSession }) {
  const [ticket, setTicket] = useState(initialTicket);

  // useCallback para evitar recriação da função
  const logChatMemoized = useCallback((ticket) => {
    logChat(ticket, userSession);
  }, [userSession]); // Só muda se userSession mudar

  useEffect(() => {
    const chat = new Chat(ticket);
    chat.start();
    
    logChatMemoized(ticket); // Usa a versão memoizada da função

    return () => chat.stop();
  }, [ticket]); // Reage apenas a mudanças no ticket

  const onClose = () => {
    console.log('Fechando o chat...');
    // Adicione aqui a lógica de fechamento
  };

  return (
    <div>
      <h2>Chat Component</h2>
      <p>Ticket atual: {ticket}</p>
      <button onClick={() => setTicket(Date.now().toString())}>
        Iniciar novo atendimento
      </button>
      <button onClick={onClose}>
        Fechar Chat
      </button>
    </div>
  );
}

export default ChatComponent;