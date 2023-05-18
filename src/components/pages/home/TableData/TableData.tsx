import Style from './TableData.module.css'
import misssusData from '@/assets/misssusData.json';

type RowTableProps = {
    rowData: string;
  };
  
  type HeadTableProps = {
    headData: string;
  };
  
  const RowTable = ({rowData}: RowTableProps) => {
    return (
      <td className={Style.tableTD}>{rowData}</td>
    )
  }
  
  const HeadTable = ({headData}: HeadTableProps) => {
    return (
        <th className={Style.tableTH}>{headData}</th>
    )
  }

const TableData = () => {
    const keys = Object.keys(misssusData[0])
    return (
        <div className={Style.tblDiv} >

        <table className={Style.tbl} >
          <thead>
          <tr className={Style.tableTR}>
            {
              keys.map((item, index) => (
                <HeadTable headData={item}/>
              ))
            }
            <td style={{"width": "4px"}}/>
          </tr>
          </thead>
          </table>
          <div className={Style.tblContentDiv}>
          <table className={Style.tbl} >
            <tbody>
            {misssusData.map((item, index) => (
              <tr key={index}>
                {
                  Object.keys(item).map((keyItem, keyIndex) => (
                    <RowTable rowData={item[keyItem as keyof typeof item]}/>
                  ))
                }
              </tr>
            ))}
            </tbody>
          </table>
          </div>
      </div>
    )
}

export default TableData