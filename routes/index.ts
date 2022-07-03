/** @jsx h */
import { Handler } from '$fresh/server.ts'

export const handler: Handler = req => {
  const location = new URL(req.url);

  return Response.redirect(`${location.origin}/main.js`);
}


