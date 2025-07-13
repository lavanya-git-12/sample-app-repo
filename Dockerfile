# Start with a base image
FROM node:18-alpine

# ... rest of your Dockerfile

#M node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

