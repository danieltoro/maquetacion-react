import React from 'react';

const NeedHelp = () => {
    return (
        <div className="help-contact bg-grey-2">
            <h4 className="color-dark-2">Need Help?</h4>
            <p className="color-grey">Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a className="help-phone color-dark-2 link-dr-blue" href="tel:0200059600"><img
                src="../../img/detail/phone24-dark.png" alt="" />020 00 59 600</a>
            <a className="help-mail color-dark-2 link-dr-blue"
               href="mailto:let’s_travel@world.com"><img
                src="../../img/detail/letter-dark.png" alt="" />let’s_travel@world.com</a>
        </div>
    );
};

export default NeedHelp;