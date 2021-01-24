FROM node:12.16.3-alpine3.11 as base

WORKDIR /app
COPY package.json .
RUN npm install --only=prod \
  && npm cache clean --force
CMD ["npm", "run", "build"]

FROM base as prod

WORKDIR /app

COPY . .

CMD ["npm", "run", "start"]