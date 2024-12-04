import { server } from '@/mocks/server';

// 启动 Mock Server
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }));

// 每个测试后重置处理程序（防止测试污染）
afterEach(() => server.resetHandlers());

// 关闭 Mock Server
afterAll(() => server.close());
