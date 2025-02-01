FROM node:16

# Create app directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install

# Copy the app code
COPY . .

# Build the project
RUN yarn build

# Expose ports
EXPOSE 3001

# Run the application
CMD [ "node", "dist/start-manager.js" ]