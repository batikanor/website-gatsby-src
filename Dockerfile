# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Step 2: Install necessary dependencies for Sharp
RUN apk add --no-cache python3 make g++ vips-dev

# Step 3: Set the working directory inside the container
WORKDIR /app

# Step 4: Copy package.json
COPY package.json ./

# # Step 5: Conditionally copy package-lock.json if it exists
# COPY package-lock.json ./ || true

# Step 6: Install dependencies (sharp should install properly now)
RUN npm install

# Step 7: Copy the rest of the app source code into the container
COPY . .

# Step 8: Build the Gatsby site
RUN npm run build

# Step 9: Use a second stage for serving the site
FROM node:18-alpine AS production

# Step 10: Install necessary dependencies for production
RUN npm install -g gatsby-cli

# Step 11: Set the working directory inside the container
WORKDIR /app

# Step 12: Copy the built files from the build stage
COPY --from=build /app/public ./public

# Step 13: Expose the port Gatsby will run on
EXPOSE 8000

# Step 14: Serve the Gatsby site
CMD ["gatsby", "serve", "-H", "0.0.0.0", "-p", "8000"]
