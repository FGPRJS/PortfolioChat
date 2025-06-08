FROM node:22-alpine AS builder

WORKDIR /app

RUN apk add --no-cache --virtual .build-deps

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM node:22-alpine AS runner

# 환경 설정
ENV NODE_ENV=production
WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["node", "server.js"]