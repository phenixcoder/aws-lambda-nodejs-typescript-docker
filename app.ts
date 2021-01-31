import { APIGatewayEvent, APIGatewayEventRequestContext } from 'aws-lambda';
import { APIResponse } from './types/APIResponse';

export async function handler(
  event: APIGatewayEvent,
  context: APIGatewayEventRequestContext
): Promise<APIResponse> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      foo: 'bar',
      event,
      context,
    }),
  };
}
