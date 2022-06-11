import {
  formatDate,
  currencyNumberFormat,
  percentNumberFormat,
} from '../util/util'

export default function Report({ children: report = null }) {
  const {year, month, value, monthYield} = report

  return (
    <tr>
      <td>
        <span>{formatDate(year, month)}</span>
      </td>
      <td>
        <span>{currencyNumberFormat.format(Number(value).toFixed(2))}</span>
      </td>
      <td>
        <span>{`${percentNumberFormat.format(
          Number(monthYield).toFixed(2)
        )}`}</span>
      </td>
    </tr>
  );
}
