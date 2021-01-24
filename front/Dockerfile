FROM node:12.16.3-alpine3.11

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install --only=prod

# start app
RUN npm run build

CMD npm run start