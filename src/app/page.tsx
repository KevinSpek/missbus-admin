import Style from './page.module.css'
import Column from "@/components/Column"
import Text from '@/components/Text'
import Row from '@/components/Row';
import Divider from '@/components/Divider';
import TableData from '@/components/pages/home/TableData';
import BarChart from '@/components/pages/home/BarChart';
import misssusData from '@/assets/misssusData.json';
import negativeSamplingData from '@/assets/negativeSampling.json'




const App = () => {


  return (
    <Column padding={[32]} fitParent justifyContent='flex-start' gap={16} className={Style.main}>
      {/* <div style={{"position": "absolute", "top": "0", "left": "0", "zIndex": "0"}}>
        <BusBackground />
      </div> */}
      <Row fullWidth justifyContent='flex-start'>
        <Text text="Data" bold type="bigTitle" />
      </Row>
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Complaints collected from pilot" bold type="title" />
      </Row>
      <TableData data={misssusData} />
      <Column fullWidth alignItems='flex-start' padding={[16, 34]}>
        <Text text="Negative sampling we added (Opposite of complaints)" bold type="title" />
        <Text text="Busses that arrived on time" bold type="subTitle" />
      </Column>

      <TableData data={negativeSamplingData} />
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Free text complaints example" bold type="title" />
      </Row>
      <Column alignItems='center' fullWidth gap={16}>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />
          <Text bold text="אני חייל שצריך להגיע לבסיס ברמת הגולן בזמן וחייב להגיע לשאטל מירושלים חיכיתי בתחנה ושהאוטובוס עבר הוא סימנתי לו והוא המשיך בנסיעה והיה לו מקומות" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />
        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />
          <Text bold text="ברוב חוצפתו, נופף אלי בחזרה בתנועות שמבהירות שאיננו עוצר. חבל שיש נהגים כאלה. ביזיון ובושה" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />

          <Text bold text="גם איחר וגם עבר פה ולא עצר למרות שנפנפתי לו" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />

          <Text bold text="היו שלושה אנשים בתחנה. נפנפנו בידיים והוא פשוט התעלם והמשיך" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
        <Row color="#dce8ff" padding={[8]} style={{ 'borderRadius': "10px" }}>
          <Text bold text='❝' />

          <Text bold text="שוב. גם האחד לפניו לא הגיע. מה הבעיה שלכם????" additionalStyle={{ "direction": "rtl" }} />
          <Text bold text='❞' />

        </Row>
      </Column>
      <Divider style={{ "margin": '16px' }} />
      <Row fullWidth justifyContent='flex-start' padding={[16, 0]}>
        <Text text="Statistics" bold type="bigTitle" />
      </Row>
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Mean comparison for each complain type" bold type="title" />
      </Row>
      <Row fullWidth gap={32} style={{ "flexWrap": "wrap" }} justifyContent='flex-start' padding={[32, 0]}>
        <BarChart title="number of complaints" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[5, 53, 40, 2]} />
        <BarChart title="Mean relative humidity" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[67, 53.296, 62.951, 66.5]} />
        <BarChart title="Mean temperature (°C)" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[16.14, 19.281, 17.834, 16.15]} />
        <BarChart title="Mean wind speed (m/s)" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[2.06, 2.8777777777777778, 2.421951219512195, 3.0]} />
        <BarChart title="Mean rainfall (mm)" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[0.0, 0.0, 0.00975609756097561, 0.05]} />
        <BarChart title="Mean route length" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[38.7, 50.422222222222224, 19.217073170731705, 19.4]} />
        <BarChart title="Mean number of stations" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[35.2, 26.11111111111111, 39.90243902439025, 46.5]} />
        <BarChart title="Mean weekly drives" labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[231.2, 253.8148148148148, 301.4878048780488, 351.5]} />
        <BarChart title="Mean passengers number sum " labels={['Late', "Didn't stop", "Didn't arrive", "Other"]} values={[1.2, 1.037037037037037, 1.2682926829268293, 1.5]} />
      </Row>
      <Row fullWidth justifyContent='flex-start' padding={[16, 34]}>
        <Text text="Mean comparison for each week day" bold type="title" />
      </Row>
      <Row fullWidth gap={32} style={{ "flexWrap": "wrap" }} justifyContent='flex-start' padding={[32, 0]}>
        <BarChart title="Number of complaints for each week day" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[27, 14, 24, 7, 21, 6, 1]} />
        <BarChart title="Mean relative humidity" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[67.65, 61.833333333333336, 52.76190476190476, 44.5, 63.38461538461539, 50.5, 81.0]} />
        <BarChart title="Mean temperature (°C)" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[16.990000000000002, 18.825, 20.219047619047622, 20.425, 15.446153846153846, 18.425, 18.3]} />
        <BarChart title="Mean wind speed (m/s)" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[3.025, 2.1166666666666667, 2.604761904761905, 3.0250000000000004, 2.223076923076923, 2.35, 2.3]} />
        <BarChart title="Mean rainfall (mm)" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[0.0, 0.03333333333333333, 0.004761904761904762, 0.0, 0.0, 0.0, 0.0]} />
        <BarChart title="Mean route length" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[28.585, 21.208333333333332, 37.13809523809524, 50.425, 35.92307692307692, 23.799999999999997, 11.6]} />
        <BarChart title="Mean number of stations" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[36.0, 41.333333333333336, 28.904761904761905, 28.5, 37.92307692307692, 37.75, 29.0]} />
        <BarChart title="Mean weekly drives" labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[261.35, 379.5, 267.6190476190476, 198.5, 273.6923076923077, 254.5, 302.0]} />
        <BarChart title="Mean number of lines stopping at station " labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[38.65, 39.083333333333336, 30.38095238095238, 27.5, 17.692307692307693, 31.25, 42.0]} />
        <BarChart title="Mean daily number of passengers at station " labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[302.28437503, 366.71701391666664, 313.03670634761903, 215.83333335, 240.48237179461537, 243.2604167, 643.4166667]} />
        <BarChart title="Mean daily number of stops at station " labels={['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]} values={[751.6, 764.75, 597.6666666666666, 565.0, 432.84615384615387, 639.75, 807.0]} />
      </Row>
      <Divider style={{ "margin": '16px' }} />
      <Row fullWidth justifyContent='flex-start' padding={[16, 0]}>
        <Text text="Results" bold type="bigTitle" />
      </Row>

      <BarChart title="Machine learning models accuracy" labels={['Random Forest', "XGBoost", "Decision Tree"]} values={[0.8, 0.84, 0.76]} />

    </Column>

  )
}

export default App
