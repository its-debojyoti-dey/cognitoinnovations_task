# syntax=docker/dockerfile:1.6

FROM node:22-alpine AS base
WORKDIR /app

# Install production and dev dependencies
COPY package*.json tsconfig.json ./
RUN npm install

# Copy source for downstream stages
COPY src ./src

FROM base AS dev
ENV NODE_ENV=development
EXPOSE 3000
CMD ["npm", "run", "dev"]

FROM base AS builder
ENV NODE_ENV=production
RUN npm run build

FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/index.js"]

