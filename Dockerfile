# Stage 1: Build the application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY . .

# Install dependencies
RUN npm install
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

RUN npx prisma generate
RUN npx prisma db push
# Build the NestJS application
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine

WORKDIR /app

# Copy the build output and node_modules from the build stage
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 8000

# Command to run the application
CMD ["node", "dist/main"]