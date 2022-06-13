import {
  formatDate,
  currencyNumberFormat,
  percentNumberFormat,
} from '../util/util'

export default function Report({ children: report = null }) {
  
  const { year, month, value, monthYield } = report

  let valueClass = ''
  if (monthYield < 0) {
    valueClass = 'text-red-600'

  } else if (monthYield > 0) {
    valueClass = 'text-green-600'
  }

  return (
    <div className="border-b-2 p-2 m-2 flex flex-row items-center w-full space-x-8">
      <div className="flex-1 flex-grow-0">
        <span>{formatDate(year, month)}</span>
      </div>
      <div className={`${valueClass} flex-1 flex-grow text-left`}>
        <span>{currencyNumberFormat.format(Number(value).toFixed(2))}</span>
      </div>
      <div className={`${valueClass} flex-1 flex-grow-0 text-right`}>
        <span>{`${percentNumberFormat.format(
          Number(monthYield).toFixed(4)
        )}`}</span>
      </div>
    </div>
  )
}
