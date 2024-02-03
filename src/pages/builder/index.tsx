import AttributePanelArea from './attributePanelArea'
import CanvasArea from './canvasArea'
import ComponentArea from './componentArea'
import DesignTop from './designTop'

function Builder() {
  return (
    <div>
      <DesignTop />
      <ComponentArea />
      <CanvasArea />
      <AttributePanelArea />
    </div>
  )
}

export default Builder