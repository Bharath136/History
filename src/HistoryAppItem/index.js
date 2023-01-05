import './index.css'

const HistoryAppItem = props => {
  const {eachHistory, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="history-item">
      <div className="con">
        <p className="time">{timeAccessed}</p>
        <div className="logo-del">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <div className="dom-title">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryAppItem
