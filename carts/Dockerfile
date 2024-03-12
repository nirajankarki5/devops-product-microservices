# Use a base image with Node.js pre-installed
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# # Install MongoDB
# RUN apt-get update && \
#     apt-get install -y gnupg && \
#     apt-get install -y wget && \
#     wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add - && \
#     echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list && \
#     apt-get update && \
#     apt-get install -y mongodb-org && \
#     rm -rf /var/lib/apt/lists/*

# Expose ports for Node.js and MongoDB
EXPOSE 4003

# Command to start MongoDB
CMD ["mongod", "--bind_ip_all"]

# Command to run the Node.js application
CMD ["node", "index.js"]
