export const TOKEN_KEY = "token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const saveToken = (token: string) => {
  const cleanToken = extractToken(token);
  if (cleanToken) {
    localStorage.setItem(TOKEN_KEY, cleanToken);
  }
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const extractToken = (token: string): string | null => {
  console.log({ token });
  const match = token.match(/\|(.+)/);
  console.log({ match });
  return match ? match[1].replace('"', "").trim() : null;
};
