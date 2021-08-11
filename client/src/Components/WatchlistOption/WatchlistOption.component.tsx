import './WatchlistOption.css'
import Option from '../../types/Option'

interface Props {
  option: Option,
  optionToPortfolio: (option: Option) => void,
  deleteFromWatchlist: (option: Option) => void
}

export default function WatchlistOption({
  option,
  optionToPortfolio,
  deleteFromWatchlist
}: Props) {
  return (
    <div data-testid="watchlistoption" className="WatchlistOption">
      <div id="the=description">{option.description}</div>

      <div id="the-buttons">
        <button
          data-testid="optiontoportfolio"
          id="wl-to-pf-button"
          onClick={() => optionToPortfolio(option)}
        >
          🤑
        </button>

        <button
          data-testid="deletefromwatchlist"
          id="remove-from-wl-button"
          onClick={() => deleteFromWatchlist(option)}
        >
          ❌
        </button>
      </div>
    </div>
  )
}
