export async function getFeature() {
  // GET
}

export async function getBanner() {
  // GET
}

export async function getCategory() {
  // GET
  const response = await fetch("https://fakestoreapi.com/products/categories");
  const data = response.json();
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return data;
}
export async function getRecommendation() {}

export async function getSearchQuery() {
  // GET
}

export async function getFilterQuery(type, query) {
  // GET
  if (query.type === "category") {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + query
    );
    const data = response.json();
    if (!response.ok) throw new Error("something went wrong");
    return data;
  }
  if (query.type === "location") {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + query
    );
    const data = response.json();
    if (!response.ok) throw new Error("something went wrong");
    return data;
  }
  if (query.type === "price") {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/" + query
    );
    const data = response.json();
    if (!response.ok) throw new Error("something went wrong");
    return data;
  }
}

export async function getProductDetail() {
  // GET
}
export async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = response.json();
  if (!response.ok) throw new Error("something went wrong");
  return data;
}
export async function sendCart() {
  // PUT
}

export async function getCart() {
  // GET
}

export async function login() {
  // POST
  getCart();
}

export async function order() {
  // POST
}
export async function getStore() {}
