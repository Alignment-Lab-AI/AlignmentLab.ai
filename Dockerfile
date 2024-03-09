FROM node:latest

WORKDIR /code/
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
# run dev in port 5000
CMD npm run dev