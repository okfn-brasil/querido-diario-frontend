FROM node:20
LABEL mantainer="nkzren"
WORKDIR /opt/contributors

ENTRYPOINT [ "/opt/contributors/entrypoint.sh" ]

COPY package.json yarn.lock ./
RUN yarn global add all-contributors-cli@6.26.1

COPY entrypoint.sh entrypoint.sh

