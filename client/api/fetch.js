// Fetch des utilisateurs

export async function fetchUserById(id) {
  const response = await fetch(`http://localhost:3310/users/${id}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Erreur lors du chargement de l'utilisateur");
  }
  const userData = await response.json();
  return userData;
}

export async function fetchUsers() {
  const response = await fetch(`http://localhost:3310/users`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des utilisateurs");
  }
  const userData = await response.json();
  return userData;
}

// Fetch des produits

export const fetchProducts = async () => {
  const response = await fetch(`http://localhost:3310/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des produits");
  }
  const productsData = await response.json();
  return productsData;
};
