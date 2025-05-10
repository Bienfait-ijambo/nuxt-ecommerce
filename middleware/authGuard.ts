import { getHeader, createError, H3Event } from 'h3'
import { verifyToken } from '~/server/api/auth/modules/jwtToken';

export async function authGuard(event: H3Event) {
  const authHeader = getHeader(event, 'authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    
    throw createError({ statusCode: 401, statusMessage: 'Invalid token' });
  }

  const token = authHeader.split(' ')[1];


  const verifyTokenData = await verifyToken(token);

  if (verifyTokenData?.message === 'invalid_token') {
   
    throw createError({ statusCode: 401, statusMessage: 'Unauthorized' });
  } else {
    (event.context as any).user = verifyTokenData;
  }

}

