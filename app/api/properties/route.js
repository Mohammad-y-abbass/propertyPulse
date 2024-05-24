import connectDB from '@/config/db';

export const GET = async (req) => {
  try {
    await connectDB();
    return new Response('HELLO', { status: 200 });
  } catch (err) {
    return new Response('Something went wrong', { status: 500 });
  }
};
