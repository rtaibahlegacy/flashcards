import {reactotronRedux} from 'reactotron-redux';
import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';

Reactotron.configure({
  name: 'React Native Demo',
})
  .use(reactotronRedux())
  .use(trackGlobalErrors())
  .use(openInEditor())
  .use(overlay())
  .use(asyncStorage())
  .use(networking())
  .connect();
