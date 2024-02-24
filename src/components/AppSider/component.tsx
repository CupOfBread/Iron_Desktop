import { DropboxOutlined } from '@ant-design/icons';

export default function AppSider() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        paddingLeft: 26,
        paddingRight: 26,
        paddingBottom: 24,
        paddingTop: 12,
      }}
    >
      <div className="" style={{ color: '#71768F', height: 40 }}>
        App
      </div>
      <div className="pl-2 pr-2 mb-2 leading-9 text-gray-600 rounded-md h-9 side-wrapper hover:bg-red-500 hover:text-white">
        <DropboxOutlined /> <span className="ml-2 ">音乐库</span>
      </div>
      <div className="pl-2 pr-2 mb-2 leading-9 text-gray-600 rounded-md h-9 side-wrapper hover:bg-red-500 hover:text-white">
        <DropboxOutlined /> <span className="ml-2 ">音乐库</span>
      </div>
    </div>
  );
}
