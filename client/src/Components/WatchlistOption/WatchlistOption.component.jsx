import './WatchlistOption.css'

export default function WatchlistOption({
  option,
  optionToPortfolio,
  deleteFromWatchlist,
}) {
  return (
    <div className="WatchlistOption">
      <div id="the=description">{option.description}</div>

      <div id="the-buttons">
        <button id="wl-to-pf-button" onClick={() => optionToPortfolio(option)}>
          🤑
        </button>

        <button
          id="remove-from-wl-button"
          onClick={() => deleteFromWatchlist(option)}
        >
          ❌
        </button>
      </div>
    </div>
  )
}
