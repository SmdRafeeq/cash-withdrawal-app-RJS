import {Component} from 'react'

import DenominationItem from "../DenominationItem"

import './index.css'

class CashWithdrawal extends Component {
    state = {balance: 2000}

    updateBalance = value => {
        this.setState(preState => ({balance: preState.balance - value}))
    }

    render() {
        const {balance} = this.state
        const {denominationsList } = this.props
        const name = "Sarah Williams"
        const initialLetter = name.slice(0, 1)
        return (
            <div className="main-container">
                <div className="cash-withdrawal-container">
                    
                    <div className="name-container">
                        <span className="profile">{initialLetter}</span>
                        <h1 className="user-name">{name}</h1>
                    </div>

                    <div className="balance-container">
                        <p className="your-balance">Your Balance</p>
                        <div>
                            <p className="amount">{balance}</p>
                            <p className="amount-text">In Rupees</p>
                        </div>
                    </div>

                    <div className="withdrawal-container">
                        <p className='withdraw-heading'>Withdraw</p>
                        <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
                        <ul className="denominations-lsit">
                            {denominationsList.map(eachDenom => (
                                <DenominationItem key={eachDenom.id} denominationsDetails={eachDenom}
                                updateBalance={this.updateBalance} />
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default CashWithdrawal