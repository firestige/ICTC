import { setupServer } from 'msw/node';
import { http } from 'msw';

// 定义 Mock 处理程序
export const handlers = [
  // GET 请求示例
  http.get('/api/data', () => {
    return new Response(
      JSON.stringify({ message: 'Mock response from server' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }),

  // POST 请求示例
  http.post('/api/data', async ({ request }) => {
    const requestBody = await request.json();
    return new Response(
      JSON.stringify({
        message: 'Resource created successfully',
        received: requestBody,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }),

  // 错误响应示例
  http.get('/api/error', () => {
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }),
];

// 设置 Mock Server
export const server = setupServer(...handlers);