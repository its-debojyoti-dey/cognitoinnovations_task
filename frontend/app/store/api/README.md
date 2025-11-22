# RTK Query API Setup

This directory contains RTK Query API configuration and endpoints.

## Structure

- `baseApi.ts`: Base API configuration with base URL and headers
- `orderApi.ts`: Order-related API endpoints

## Base API Configuration

The base API is configured to:

- Use `NEXT_PUBLIC_API_BASE_URL` environment variable (defaults to `http://localhost:3001`)
- Send requests to `/api/v1` endpoint
- Include JSON content type headers
- Support authentication tokens (ready for future implementation)

## Order API Endpoints

### Place Order

```tsx
const [placeOrder, { isLoading, isError, isSuccess, error, data }] = usePlaceOrderMutation();

await placeOrder({
  billingDetails: { ... },
  items: [ ... ],
  total: 100.00,
  paymentMethod: "credit_card",
  customerEmail: "user@example.com"
});
```

### Get Order

```tsx
const { data, isLoading, error } = useGetOrderQuery(orderId);
```

### Get All Orders

```tsx
const { data, isLoading, error } = useGetOrdersQuery();
```

## Environment Variables

Make sure to set the following in your `.env.local`:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3001
```

## Backend Endpoint Expected Format

The backend should implement the following endpoint:

**POST `/api/v1/orders`**

Request Body:

```json
{
  "billingDetails": {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "address": "123 Main St",
    "city": "New York",
    "postCode": "10001",
    "country": "US",
    "region": "NY"
  },
  "items": [
    {
      "productId": "1",
      "title": "Product Name",
      "quantity": 2,
      "price": 50.0,
      "size": "50kg"
    }
  ],
  "total": 100.0,
  "paymentMethod": "credit_card",
  "customerEmail": "john@example.com",
  "otp": "123456"
}
```

Response Format:

```json
{
  "success": true,
  "message": "Order placed successfully",
  "data": {
    "id": "123",
    "orderNumber": "ORD-12345",
    "status": "pending",
    "total": 100.00,
    "items": [ ... ],
    "billingDetails": { ... },
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```
