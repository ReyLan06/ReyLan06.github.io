

// Componente de prueba similar a tu HTML
// __tests__/index.test.js
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';


const MessageComponent = () => {
  React.useEffect(() => {
    document.getElementById('changeMessage').addEventListener('click', () => {
      const messageElement = document.getElementById('message');
      messageElement.classList.toggle('animate');
      messageElement.textContent = messageElement.textContent === '¡Hola Mundo!' ? '¡Hola JavaScript!' : '¡Hola Mundo!';
    });
  }, []);

  return (
    <div id="container">
      <div id="message">¡Hola Mundo!</div>
      <button id="changeMessage">Cambiar Mensaje</button>
    </div>
  );
};

test('changes the message and animates on button click', () => {
  const { getByText, getByRole } = render(<MessageComponent />);
  const message = getByText('¡Hola Mundo!');
  const button = getByRole('button', { name: /cambiar mensaje/i });

  fireEvent.click(button);

  expect(message).toHaveTextContent('¡Hola JavaScript!');
  expect(message).toHaveClass('animate');
});

