import { Redis } from "@upstash/redis";

export const db: Redis = new Redis({
  url: 'https://apn1-evolved-hornet-33740.upstash.io',
  token: 'AYPMASQgYjc5MmU4MmQtYTg5YS00ZDliLTg3YWEtZjZkYWRlNTUxZTFhZTdiMGRiYzFiMzU0NDZjNWE5MGQ5ZjY1MjhkNTUxMDE=',
});
