import Main from '../admin/main';
import Customer from '../admin/customer';
// import Registration from './registration';
// import Order from './order';
import Property from '../admin/property';
import News from '../admin/news';
import Video from '../admin/video';

export default function PanelSwitch({ activePanel }) {
  let CurrentPanel;
  switch (activePanel) {
    case 'Main':
      CurrentPanel = Main;
      break;
    case 'Customers':
      CurrentPanel = Customer;
      break;
    // case 'Registration':
    //   CurrentPanel = Registration;
    //   break;
    // case 'Orders':
    //   CurrentPanel = Order;
    //   break;
    case 'Properties':
      CurrentPanel = Property;
      break;
    case 'News':
      CurrentPanel = News;
      break;
    case 'Videos':
      CurrentPanel = Video;
      break;
    default:
      CurrentPanel = () => <></>;
  }

  return (
    <>
      <CurrentPanel />
    </>
  );
}
