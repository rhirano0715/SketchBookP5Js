FROM node:lts-slim as node

RUN npm install -g textlint \
    textlint-rule-preset-ja-spacing \
    textlint-rule-preset-ja-technical-writing \
    textlint-rule-no-dropping-the-ra \
    textlint-rule-no-double-negative-ja \
    textlint-rule-no-mix-dearu-desumasu \
    parcel \
    p5 \
    @types/p5

FROM ubuntu:latest as ubuntu

RUN apt update && \
    apt-get update && \
    apt-get install -y sudo && \
    sudo apt-get install -y language-pack-ja-base language-pack-ja ibus-mozc curl

ARG USERNAME=user
ARG GROUPNAME=user
ARG UID=1000
ARG GID=1000
ARG PASSWORD=user
RUN groupadd -g $GID $GROUPNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID -G sudo $USERNAME && \
    echo $USERNAME:$PASSWORD | chpasswd && \
    echo "$USERNAME   ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers
USER $USERNAME

COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/lib     /usr/local/lib
COPY --from=node /usr/local/bin     /usr/local/bin

RUN sudo apt-get install -y git
