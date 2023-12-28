const Input = ({ label, colSize = 6 }) => {
    return (
        <div className={`col-sm-${colSize}`}>
            <div className="col-12">
                <div className="postbox__comment-input mb-30">
                    <input type="text" className="inputText" required />
                    <span className="floating-label">{label}</span>
                </div>
            </div>
        </div>
    );
};

export default Input;
