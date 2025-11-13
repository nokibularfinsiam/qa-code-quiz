import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AuthProvider } from '../../contexts/auth';
import Login from '../login';
import Header from '../header';

describe('Login + Header integration', () => {
  test('successful login updates header greeting', async () => {
    render(
      <AuthProvider>
        <Header />
        <Login />
      </AuthProvider>
    );

    const userInput = screen.getByPlaceholderText('Enter Username');
    const passInput = screen.getByPlaceholderText('password');
    const loginBtn = screen.getByText('LOGIN');

    fireEvent.change(userInput, { target: { value: 'SomeUser_name' } });
    fireEvent.change(passInput, { target: { value: 'TopSecret1234!' } });
    fireEvent.click(loginBtn);

    // wait for header to show logged in name
    await waitFor(() => expect(screen.getByText('Hello SomeName')).toBeInTheDocument());
  });
});
