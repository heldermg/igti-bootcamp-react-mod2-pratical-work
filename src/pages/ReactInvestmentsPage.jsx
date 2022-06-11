import Header from '../components/Header'
import Main from '../components/Main'
import { currencyNumberFormat, percentNumberFormat } from '../util/util'
import {
  INVESTMENT_FUNDS as allFunds,
  FUNDS_REPORTS as allReports,
} from '../data/investments'
import Funds from '../components/Funds'
import Report from '../components/Report'

export default function ReactInvestmentsPage() {

   function filterAndSortReportsByFund(reports, fundId) {
      return reports
         .filter(({ investmentId }) => investmentId === fundId)
         .sort((a, b) => a.month - b.month)
   }

  return (
    <div>
      <Header>react-investments v1.0</Header>
      <Main>
        <Funds>
          {allFunds.map(fund => {
            const allReportsByFund = filterAndSortReportsByFund(allReports, fund.id)

            let previousReportValue = 0
            allReportsByFund.map(report => {
              report.monthYield =
                previousReportValue !== 0
                  ? (report.value - previousReportValue) / previousReportValue
                  : 0
              previousReportValue = report.value
              return report
            })

            const totalYieldAmount =
              allReportsByFund[allReportsByFund.length - 1].value -
              allReportsByFund[0].value

            const totalYield = totalYieldAmount / allReportsByFund[0].value

            return (
              <div className="border-2 m-4" key={fund.id}>
                <p className="text-center text-xl p-2">{fund.description}</p>
                <p className="text-center text-xs">
                  Rendimento Total:{' '}
                  {currencyNumberFormat.format(
                    Number(totalYieldAmount).toFixed(2)
                  )}{' '}
                  {` (${percentNumberFormat.format(
                    Number(totalYield).toFixed(4)
                  )})`}
                </p>
                <table className="p-10">
                  <tbody>
                    {allReportsByFund
                      .map(report => {
                        return (
                          <Report
                            key={report.id}>
                            {report}
                          </Report>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )
          })}
        </Funds>
      </Main>
    </div>
  );
}
