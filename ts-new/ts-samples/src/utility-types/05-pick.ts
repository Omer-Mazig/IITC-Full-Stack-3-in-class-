/**
 * Pick<Type, Keys>
 *
 * Constructs a type by picking the set of properties Keys from Type.
 * This is useful when you want to create a subset type with only specific properties.
 */

// Original interface with many properties
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  inStock: boolean;
  tags: string[];
  manufacturer: {
    name: string;
    address: string;
  };
  reviews: { user: string; rating: number; comment: string }[];
}

// Using Pick to create a type with only the properties we need for a product card
type ProductCard = Pick<Product, "id" | "name" | "price" | "inStock">;

function displayProductCard(product: ProductCard): void {
  console.log(`
    Product: ${product.name}
    Price: $${product.price}
    ${product.inStock ? "In Stock" : "Out of Stock"}
  `);
}

// We only need to provide the picked properties
const laptop: ProductCard = {
  id: 1,
  name: "Laptop Pro X",
  price: 1299.99,
  inStock: true,
};

displayProductCard(laptop);

// Using Pick for form data
type ProductForm = Pick<Product, "name" | "price" | "description" | "category">;

function saveProductForm(formData: ProductForm): void {
  console.log("Saving product form data:", formData);
}

const newProductForm: ProductForm = {
  name: "Wireless Earbuds",
  price: 89.99,
  description: "High-quality wireless earbuds with noise cancellation",
  category: "Electronics",
};

saveProductForm(newProductForm);
