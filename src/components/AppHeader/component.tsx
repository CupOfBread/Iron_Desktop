import {
  BorderOutlined,
  CloseOutlined,
  LeftOutlined,
  MinusOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { appWindow } from '@tauri-apps/api/window';

export default function AppHeader() {
  const handleMouseEnter = async () => {
    await appWindow.startDragging();
  };
  return (
    <div className="flex flex-row justify-between ">
      <div>
        <div className="box-border inline p-2 ml-2 border rounded-md">
          <LeftOutlined />
        </div>
      </div>
      <div
        className="flex flex-row mr-3 justify-evenly basis-40"
        style={{ color: '#7c8290' }}
      >
        <SettingOutlined />
        <MinusOutlined />
        <BorderOutlined />
        <CloseOutlined />
      </div>
    </div>
  );
}
