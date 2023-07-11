import "./index.css"

const DenominationItem = props => {
    const {denominationsDetails, updateBalance} = props
    const {value} = denominationsDetails

    const onClickDenomination = () => {
        updateBalance(value)
    }

    return (
        <li className="denomination-item">
            <button className="denomination-button" type="button" onClick={onClickDenomination}>{value}</button>
        </li>
    )
}

export default DenominationItem

