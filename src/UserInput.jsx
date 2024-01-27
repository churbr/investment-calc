import React, { useState } from "react";

const UserInput = ({ onChangeInput, userInputData }) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        onChange={(e) => onChangeInput('initialInvestment', e.target.value)}
                        value={userInputData.initialInvestment}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required onChange={(e) => onChangeInput('annualInvestment', e.target.value)}
                        value={userInputData.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        onChange={(e) => onChangeInput('expectedReturn', e.target.value)}
                        value={userInputData.expectedReturn}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        onChange={(e) => onChangeInput('duration', e.target.value)}
                        value={userInputData.duration}
                    />
                </p>
            </div>
        </section>
    )
}

export default UserInput;