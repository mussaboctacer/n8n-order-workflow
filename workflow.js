const payload = {
  "orders": [
    {
      "orderId": "ORD-1001",
      "customer": { "id": "CUST-101", "name": "Alice Johnson", "email": "alice.johnson@example.com" },
      "items": [
        { "productId": "PROD-2001", "name": "Wireless Mouse", "category": { "id": "CAT-501", "name": "Electronics", "subcategory": "Peripherals" }, "quantity": 2, "price": 24.99 },
        { "productId": "PROD-2002", "name": "USB-C Hub", "category": { "id": "CAT-501", "name": "Electronics", "subcategory": "Accessories" }, "quantity": 1, "price": 49.99 }
      ],
      "status": "shipped",
      "orderDate": "2024-03-20T14:22:00Z",
      "shippingAddress": { "street": "123 Elm Street", "city": "Springfield", "zip": "62701", "country": "US" }
    },
    {
      "orderId": "ORD-1002",
      "customer": { "id": "CUST-102", "name": "Bob Smith", "email": "bob.smith@example.com" },
      "items": [
        { "productId": "PROD-2003", "name": "Ergonomic Keyboard", "category": { "id": "CAT-501", "name": "Electronics", "subcategory": "Peripherals" }, "quantity": 1, "price": 89.99 }
      ],
      "status": "shipped",
      "orderDate": "2024-02-28T09:15:00Z",
      "shippingAddress": { "street": "456 Oak Avenue", "city": "Riverside", "zip": "92501", "country": "US" }
    },
    {
      "orderId": "ORD-1003",
      "customer": { "id": "CUST-103", "name": "Carla Davis", "email": "carla.davis@example.com" },
      "items": [
        { "productId": "PROD-2010", "name": "HDMI Cable 6ft", "category": { "id": "CAT-502", "name": "Cables", "subcategory": "Video" }, "quantity": 3, "price": 12.50 },
        { "productId": "PROD-2011", "name": "DisplayPort Adapter", "category": { "id": "CAT-502", "name": "Cables", "subcategory": "Adapters" }, "quantity": 2, "price": 19.99 }
      ],
      "status": "pending",
      "orderDate": "2024-03-10T16:45:00Z",
      "shippingAddress": { "street": "789 Pine Lane", "city": "Hill Valley", "zip": "95420", "country": "US" }
    },
    {
      "orderId": "ORD-1004",
      "customer": { "id": "CUST-104", "name": "David Lee", "email": "david.lee@example.com" },
      "items": [
        { "productId": "PROD-2020", "name": "Webcam 1080p", "category": { "id": "CAT-503", "name": "Video", "subcategory": "Cameras" }, "quantity": 1, "price": 59.99 },
        { "productId": "PROD-2021", "name": "Ring Light", "category": { "id": "CAT-503", "name": "Video", "subcategory": "Lighting" }, "quantity": 1, "price": 34.99 },
        { "productId": "PROD-2002", "name": "USB-C Hub", "category": { "id": "CAT-501", "name": "Electronics", "subcategory": "Accessories" }, "quantity": 1, "price": 49.99 }
      ],
      "status": "shipped",
      "orderDate": "2024-03-05T11:00:00Z",
      "shippingAddress": { "street": "321 Birch Road", "city": "Metropolis", "zip": "62960", "country": "US" }
    },
    {
      "orderId": "ORD-1005",
      "customer": { "id": "CUST-105", "name": "Emma Watson", "email": "emma.watson@example.com" },
      "items": [
        { "productId": "PROD-2030", "name": "Laptop Stand", "category": { "id": "CAT-504", "name": "Furniture", "subcategory": "Desk Accessories" }, "quantity": 1, "price": 42.00 }
      ],
      "status": "canceled",
      "orderDate": "2024-03-18T08:20:00Z",
      "shippingAddress": { "street": "654 Maple Drive", "city": "Star City", "zip": "60201", "country": "US" }
    },
    {
      "orderId": "ORD-1006",
      "customer": { "id": "CUST-106", "name": "Frank Castle", "email": "frank.castle@example.com" },
      "items": [
        { "productId": "PROD-2040", "name": "External SSD 1TB", "category": { "id": "CAT-501", "name": "Electronics", "subcategory": "Storage" }, "quantity": 2, "price": 99.99 },
        { "productId": "PROD-2041", "name": "USB-C to USB-A Adapter", "category": { "id": "CAT-502", "name": "Cables", "subcategory": "Adapters" }, "quantity": 3, "price": 7.50 }
      ],
      "status": "shipped",
      "orderDate": "2024-03-25T17:30:00Z",
      "shippingAddress": { "street": "987 Cedar Court", "city": "Gotham", "zip": "10001", "country": "US" }
    }
  ]
};

const filteredOrders = payload.orders.filter(function (order) {
  return order.status === "shipped" && new Date(order.orderDate) > new Date("2024-03-01T00:00:00Z");
});

const processedOrders = filteredOrders.map(function (order) {
  const totalValue = order.items.reduce(function (sum, item) {
    return sum + item.quantity * item.price;
  }, 0);

  const shippingAddress = order.shippingAddress.street + ", " + order.shippingAddress.city + ", " + order.shippingAddress.zip + ", " + order.shippingAddress.country;

  return {
    orderId: order.orderId,
    customerName: order.customer.name,
    totalValue: totalValue,
    shippingAddress: shippingAddress
  };
});

const totalRevenue = processedOrders.reduce(function (sum, order) {
  return sum + order.totalValue;
}, 0);

const finalResult = {
  processedOrders: processedOrders,
  summary: {
    orderCount: processedOrders.length,
    totalRevenue: totalRevenue
  }
};

return [
  {
    json: finalResult
  }
];
