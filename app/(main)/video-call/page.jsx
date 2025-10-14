import VideoCall from "./video-call-ui";

export default async function VideoCallPage({ searchParams }) {
  const { sessionId, token } = await searchParams;

  console.log(sessionId);

  return <VideoCall sessionId={sessionId} token={token} />;
}
