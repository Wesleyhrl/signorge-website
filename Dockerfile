FROM dhi.io/node:24-alpine3.22-dev AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm npm ci --no-audit --no-fund

COPY . .
ENV NODE_ENV=production
RUN npm run build

FROM dhi.io/node:24-alpine3.22 AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# The npm postbuild script adds public and .next/static to the standalone output.
COPY --from=builder --chown=1000:1000 /app/.next/standalone/ ./

USER 1000:1000
EXPOSE 3000
CMD ["node", "server.js"]
