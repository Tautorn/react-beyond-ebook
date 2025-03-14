"use client";

import React, { useState } from 'react';
import { useFormStatus, useOptimistic } from 'react';

export default function CommentForm() {
  const [comments, setComments] = useState([]);
  
  // Função server-side que será executada como Server Action
  async function addComment(formData) {
    const name = formData.get("name");
    const comment = formData.get("comment");

    // Simulamos um salvamento no servidor (normalmente seria uma requisição a um banco de dados)
    return { name, comment };
  }

  const [isPending, startTransition] = useFormStatus();

  // Função de envio de formulário
  function handleSubmit(e) {
    e.preventDefault();

    // Atualiza a UI de forma otimista antes da resposta do servidor
    startTransition(() => {
      addComment(new FormData(e.target)).then(newComment => {
        setComments(prevComments => [...prevComments, newComment]);
      });
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Seu nome" required />
        <textarea name="comment" placeholder="Seu comentário" required />
        <button type="submit" disabled={isPending}>
          {isPending ? "Enviando..." : "Enviar"}
        </button>
      </form>

      <h3>Comentários:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <strong>{comment.name}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
}