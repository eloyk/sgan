FROM node:12.16.3-alpine3.11

WORKDIR /app

# install dependencies
RUN npm install --only=prod

# copy source files
COPY . .

CMD ["npm", "run", "dev"]