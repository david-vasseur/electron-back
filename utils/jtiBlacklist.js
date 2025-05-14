import { redis } from '../redisClient.js';

export const blacklistJTI = async (jti, ttl = 900) => {
    await redis.set(`used-jti:${jti}`, '1', { EX: ttl });
};

export const isJTIBlacklisted = async (jti) => {
    const found = await redis.get(`used-jti:${jti}`);
    return found === '1';
};
