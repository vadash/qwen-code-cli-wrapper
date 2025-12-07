import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { registerChatRoutes } from './routes/chat';
import { registerHealthRoutes } from './routes/health';
import { registerModelsRoutes } from './routes/models';
import type { Bindings } from './types/bindings';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', cors({
	origin: '*',
	allowMethods: ['GET', 'POST', 'OPTIONS'],
	allowHeaders: ['Content-Type', 'Authorization'],
}));

registerHealthRoutes(app);
registerChatRoutes(app);
registerModelsRoutes(app);

export default app;
