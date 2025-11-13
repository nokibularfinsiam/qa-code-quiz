import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider, AuthContext } from '../../contexts/auth';
import accounts from '../../../storage/account.json';

describe('AuthContext', () => {
  test('login success sets user', async () => {
    let contextValue: any = null;
    const TestComponent: React.FC = () => {
      const ctx = React.useContext(AuthContext);
      contextValue = ctx;
      return null;
    }

    const div = document.createElement('div');
    ReactDOM.render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
      div
    );

    await expect(contextValue.login('SomeUser_name', 'TopSecret1234!')).resolves.toEqual(accounts['SomeUser_name']);

    // wait a tick for state update
    await new Promise((r) => setTimeout(r, 0));
    expect(contextValue.user).toEqual(accounts['SomeUser_name']);
  });

  test('login failure rejects', async () => {
    let contextValue: any = null;
    const TestComponent: React.FC = () => {
      const ctx = React.useContext(AuthContext);
      contextValue = ctx;
      return null;
    }

    const div = document.createElement('div');
    ReactDOM.render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>,
      div
    );

    await expect(contextValue.login('SomeUser_name', 'wrongpassword')).rejects.toBe('INVALID USER');
  });
});
