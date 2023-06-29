FROM nginx

# react 폴더 생성
RUN mkdir /typetrip

# typetrip 폴더 생성
WORKDIR /typetrip
RUN mkdir /react

# work dir 고정
WORKDIR /typetrip/react

# work dir에 build 폴더 생성
RUN mkdir ./build

# host의 build 폴더를 workdir의 build 폴더로 복사
ADD ./build ./build

RUN ls -al

# Docker nginx의 default.conf를 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host의 nginx.conf를 Docker 해당 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 포트 오픈
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]