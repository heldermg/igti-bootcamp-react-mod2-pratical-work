import Report from './Report'
import { currencyNumberFormat, percentNumberFormat } from '../util/util'
import { INVESTMENTS_REPORTS as allReports } from '../data/investments'

export default function Investment({ children: investment = null }) {

  if (!investment) {
    return <div>Impossible to show the Investment</div>
  }

  const investReports = allReports
    .filter(({ investmentId }) => investmentId === investment.id)
    .sort((report1, report2) => report1.month - report2.month)
   
  let prevValue = 0
  investReports.forEach((report) => {
    report.monthYield =
      prevValue !== 0
        ? (report.value - prevValue) / prevValue
        : 0
      prevValue = report.value
  })

  const firstValue = investReports[0].value
  const lastValue = investReports[investReports.length - 1].value
  const totalYieldValue = lastValue - firstValue

  const totalYieldValueFormated = currencyNumberFormat
    .format(Number(totalYieldValue).toFixed(2))

  const totalYieldPercentage = percentNumberFormat
     .format(Number(totalYieldValue / firstValue).toFixed(4))

  let totalYieldClass = ''
  if (totalYieldValue < 0) {
    totalYieldClass = 'text-red-600'
   
  } else if (totalYieldValue > 0) {
    totalYieldClass = 'text-green-600'
  }

  return (
    <div className="font-sans border p-2 m-2 flex flex-col space-y-4 items-center space-x-2">
      <h1 className="font-bold text-xl">{investment.description}</h1>
      <h2>
        <strong>Total yield:</strong>
        <span className={`${totalYieldClass}`}> {totalYieldValueFormated} ({totalYieldPercentage})</span>
      </h2>
      {investReports.map((report) => {
         return <Report key={report.id}>{report}</Report>
      })}
    </div>
  )
}
