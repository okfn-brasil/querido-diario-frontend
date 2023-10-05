FROM node:20
LABEL mantainer="nkzren"
WORKDIR /opt/contributors

ENTRYPOINT [ "/opt/contributors/entrypoint.sh" ]

COPY package.json yarn.lock ./
RUN yarn install --dev

COPY entrypoint.sh entrypoint.sh

