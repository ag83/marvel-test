
export async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}

export async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return response.json();
}
