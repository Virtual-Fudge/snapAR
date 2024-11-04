import { bootstrapCameraKit } from '@snap/camera-kit';

(async function main() {
  const apiToken =
    'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzMwMTMzMjUwLCJzdWIiOiJhYzg3MDI1ZC1iZWNiLTRiODEtODQ2Mi1jYTU0YmE1NjM3OTN-U1RBR0lOR35lZDEwMGE5ZC1mOWY0LTQwNjYtYmVjMS1kOWQzNDAzYzEzMzAifQ.uQLyQ_yUVU2VfXXHTjLvHVGpRt-JmIgL1ob_k47o8kI';
  const cameraKit = await bootstrapCameraKit({ apiToken });

  const liveRenderTarget = document.getElementById('canvas') as HTMLCanvasElement;
  const session = await cameraKit.createSession({liveRenderTarget});

  const mediaStream = await navigator.mediaDevices.getUserMedia({video:{facingMode: 'user'}})

  await session.setSource(mediaStream);
  await session.play();

// Loading a single lens
const lens = await cameraKit.lensRepository.loadLens(
  '414382f6-6f68-4f35-b790-4fab6825eeab',
  '03e011e9-50b5-4a1f-880f-dc4a187ea4c3'
);
await session.applyLens(lens);

})();