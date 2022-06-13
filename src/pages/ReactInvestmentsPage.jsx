import Header from '../components/Header'
import Main from '../components/Main'

import { INVESTMENTS as allInvestments } from '../data/investments'
import Investments from '../components/Investments'
import Investment from '../components/Investment'

export default function ReactInvestmentsPage() {
  return (
    <>
      <Header>react-investments v1.0</Header>
      <Main>
        <Investments>
          {allInvestments.map(investment => {
            return <Investment key={investment.id}>{investment}</Investment>
          })}
        </Investments>
      </Main>
    </>
  )
}
