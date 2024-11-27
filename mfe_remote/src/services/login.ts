export const loginService = (email: string, password: string) => {
  console.log(email, password)
  return {
    user: { id: '123', name: 'John Doe', email: 'john@example.com' },
    token: 'fake-token',
  };
};
