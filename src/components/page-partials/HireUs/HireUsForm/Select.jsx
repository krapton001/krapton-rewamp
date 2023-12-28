const Select = ({ target, options = [] }) => {
    const renderOptions = () => {
        return (
            <>
                <select style={{ display: 'none' }}>
                    {options.map((opt) => (
                        <option>{opt}</option>
                    ))}
                </select>
                <div className="nice-select">
                    <span className="current">{target}</span>
                    <ul className="list">
                        {options.map((opt) => (
                            <li className="option selected focus">{opt}</li>
                        ))}
                    </ul>
                </div>
            </>
        );
    };
    return (
        <div className="col-sm-12">
            <div className="col-12 overflow-hidden">
                <div className="postbox__select mb-30">{renderOptions()}</div>
            </div>
        </div>
    );
};

export default Select;
