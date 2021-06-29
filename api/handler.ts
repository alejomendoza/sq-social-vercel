import { VercelRequest } from '@vercel/node';
import { fabric } from 'fabric';

const canvas = () => {
  const canvas = new fabric.StaticCanvas(null, {
    width: 600,
    height: 315,
    renderOnAddRemove: false,
  });

  const text = new fabric.Text('World', {
    left: 100,
    top: 100,
    fill: '#FFF',
  });

  canvas.add(text);
  canvas.renderAll();

  const image = canvas.toDataURL().replace(/^data:image\/png;base64,/, '');

  console.log('IN CANVAS()');
  return image;
};

export async function handleRequest(request: VercelRequest) {
  // const { searchParams } = new URL(request.url);
  // const duration = searchParams.get('ms_duration');
  // const reward = searchParams.get('xlm_reward');
  // const quest = searchParams.get('quest');
  // const set = searchParams.get('set');

  const base64String = await canvas();
  return base64String;
}
