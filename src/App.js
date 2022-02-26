import Input from './components/Input/Input'
import GeoInfo from './components/GeoInfo/GeoInfo'

function App() {
  return (
    <div>
      <Input placeholder="Search for any IP address or domain" onChange={() => null} onClick={() => null} />
      <GeoInfo ipAddress="192.158.144.194" location="Brooklyn, NY 10001" timezone="UTC -05:00" isp="SpaceX Starlink" />
    </div>
  );
}

export default App;
