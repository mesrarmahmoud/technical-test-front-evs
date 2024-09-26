FROM node:20.1.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of your application code
COPY . .

# Expose the port your application runs on
EXPOSE 3000

# Command to run your application
CMD ["node", "server.js"]