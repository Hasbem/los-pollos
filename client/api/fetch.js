// Fetch des utilisateurs

export async function fetchUserById(id) {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/users/${id}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error("Erreur lors du chargement de l'utilisateur");
  }
  const userData = await response.json();
  return userData;
}

export async function fetchUsers() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/users`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des utilisateurs");
  }
  const userData = await response.json();
  return userData;
}

// Fetch des produits

export async function fetchProducts() {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
    method: "GET",
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des produits");
  }
  const recetteData = await response.json();
  return recetteData;
}
