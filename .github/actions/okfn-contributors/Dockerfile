FROM docker.io/node:20

WORKDIR /opt/contributors

COPY package.json yarn.lock ./
RUN yarn global add all-contributors-cli@6.26.1

COPY entrypoint.sh entrypoint.sh

ENTRYPOINT [ "/opt/contributors/entrypoint.sh" ]
