import Input from './Input';
import Recaptcha from './Recaptcha';
import Select from './Select';

const HireUsForm = () => {
    return (
        <div className="contact-form-area pb-120 p-sm-5">
            <div className="ml-lg-5">
                <form id="frmReq" className="js-validate card shadow-lg mb-4">
                    <div className="card-header border-0 bg-dark text-center text-white py-4 px-4 px-md-6">
                        <h2 className="h4 mb-0">Request A Proposal</h2>
                    </div>
                    <div className="card-body p-4 p-md-6">
                        <div className="row" data-select2-id={15}>
                            <Input label="Full Name" />
                            <Input label="Business Email" />
                            <Input label="Phone" />
                            <Select target="What services are you looking for? Select all that apply." />
                            <Input label="Company Name" />
                            <Input label="Reference Website Link" />
                            <Select target="Tell us about your budget" />
                            <div className="col-sm-12">
                                <div className="col-12">
                                    <div className="postbox__comment-input mb-30">
                                        <textarea type="text" className="textareaText" required />
                                        <span className="floating-label">Additional Details...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Recaptcha />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HireUsForm;
