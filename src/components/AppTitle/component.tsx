import logoTitle from '../../assets/logo_title.png';

export default function AppTitle() {
  return (
    <div className="text-center" style={{ fontSize: '1.5rem' }}>
      {/* Iron Music */}
      <img src={logoTitle} className="inline "  width={'76%'}></img>
    </div>
  );
}
