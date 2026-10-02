import StationHeader from './StationHeader'
import StreamPlayer from './StreamPlayer'
import CoverageMap from './CoverageMap'
import './App.css'

function App() {
  return (
    <div>
      <StationHeader
        stationName="WBCS"
        location="Burlington County, NJ"
        slogan="South Jersey Starts Here"
      />
      <StreamPlayer
        stationName="WBCS"
        streamUrl="https://d4cbg8stml4t6.cloudfront.net/stream"
      />
      <CoverageMap stationName="WBCS" />
    </div>
  )
}

export default App