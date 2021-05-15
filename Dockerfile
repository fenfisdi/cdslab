FROM node:14-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY yarn.lock .

RUN yarn install
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .

CMD ["yarn", "build"]


FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
