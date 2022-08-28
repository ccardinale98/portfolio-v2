FROM node:latest

# Create the portfolio's directory
RUN mkdir -p /usr/src/portfolio
WORKDIR /usr/src/portfolio

COPY package.json /usr/src/portfolio
RUN npm install

COPY . /usr/src/portfolio

# Start the bot.
CMD ["node", "server.js"]