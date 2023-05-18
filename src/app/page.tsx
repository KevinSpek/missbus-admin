import Style from './page.module.css'
import Column from "@/components/Column"
import Text from '@/components/Text'
import Row from '@/components/Row';
import Divider from '@/components/Divider';
import NumberComplaintsBarChart from '@/components/pages/home/NumberComplaintsBarChart';
import NumberComplaintsWeekDayBarChart from '@/components/pages/home/NumberComplaintsWeekDayBarChart';
import NumberComplaintsTopLinesBarChart from '@/components/pages/home/NumberComplaintsTopLinesBarChart';

import TableData from '@/components/pages/home/TableData';
import BusBackground from "@/assets/icons/busBackground";




const App = () => {

  
  return (
    <Column padding={[32, 200]} fitParent justifyContent='flex-start' gap={16} className={Style.main}>
      {/* <div style={{"position": "absolute", "top": "0", "left": "0", "zIndex": "0"}}>
        <BusBackground />
      </div> */}
      <Row fullWidth justifyContent='flex-start'>
        <Text text="Data" bold type="bigTitle"/>
      </Row>
      <TableData />
      <Divider style={{"margin": '16px'}}/>
      <Row fullWidth justifyContent='flex-start'>
        <Text text="Statistics" bold type="bigTitle"/>
      </Row>
      <NumberComplaintsBarChart /> 
      <Divider style={{"margin": '8px'}}/>
      <NumberComplaintsWeekDayBarChart />
      <Divider style={{"margin": '8px'}}/>
      <NumberComplaintsTopLinesBarChart />

    </Column>

  )
}

export default App
