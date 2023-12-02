// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.


function convertToINR(priceUSD) {
    const exchangeRate = 80;
    return priceUSD * exchangeRate;
  }
  
  
  const inventoryInUSD = {
    item1: 10,
    item2: 20,
    item3: 15,
    
  };
  
  
  const inventoryInINR = Object.fromEntries(
    Object.entries(inventoryInUSD).map(([item, priceUSD]) => [item, convertToINR(priceUSD)])
  );
  
  
  console.log("Original Inventory (USD):", inventoryInUSD);
  console.log("Converted Inventory (INR):", inventoryInINR);
   