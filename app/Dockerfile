# Use official Node image (LTS version)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json + package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application code
COPY . .

# Expose port (for documentation)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
