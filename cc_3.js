# customer-tracker
const customers = [
  {
    name: "John Dare",
    email: "john.dare@example.com",
    purchases: ["T-Shirt", "Jeans", "Socks"]
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    purchases: ["Dress", "Heels", "Handbag", "Scarf"]
  },
  {
    name: "Peter Jones",
    email: "peter.jones@example.com",
    purchases: ["Laptop", "Monitor", "Webcam"]
  },
  {
    name: "Emily White",
    email: "emily.white@example.com",
    purchases: ["Coffee Maker", "Toaster", "Blender"]
  }
];
console.log("--- Initial Customers Array ---");
console.log(customers);
customers.push({
  name: "Alice Brown",
  email: "alice.brown@example.com",
  purchases: ["Smartphone", "Charger", "Headphones"]})
  const johnDareIndex = customers.findIndex(customer => customer.name === "John Dare");
if (johnDareIndex !== -1) { // Check if John Dare exists
    customers[johnDareIndex].email = "john.dare.new4@example.com";
    console.log('\nUpdating John Dare\'s email to: ${customers[johnDareIndex].email}');
} else {
    console.log('\nJohn Dare not found in the customers array.');
}
const janeSmithIndex = customers.findIndex(customer => customer.name === "Jane Smith");
if (janeSmithIndex !== -1) { // Check if Jane Smith exists
        customers[janeSmithIndex].purchases.push("Sunglasses");
        console.log('\nAdding Sunglasses to Jane Smith\'s purchases: ${customers[janeSmithIndex].purchases}');
        console.log("Jane Smith's updated purchases:", customers[janeSmithIndex].purchases);
    } else {
        console.log("Jane Smith not found in the customers array, cannot add purchase.");
    }
    console.log("\n--- Updated Customers Array ---");
    console.log(customers);
// --- End of previous operations ---

    // Loopthrough the customers array using forEach()
customers.forEach(customer => {
    const totalPurchases = customer.purchases.length;
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Total Purchases: ${totalPurchases}`);
    console.log(`Purchases: ${customer.purchases.join(", ")}`);
    });
