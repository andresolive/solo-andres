import './Balance.css'

export default function Balance({ userState }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  })

  return (
    <div className="Balance">
      Balance:
      <div id="balance-box">{formatter.format(userState.balance)}</div>
    </div>
  )
}

// new
