import React, {PureComponent} from "react";

class FooterPage extends PureComponent {
    render() {
        return (
            <footer className="footer">
                <div className="footer-inner">
                    <div className="copyright">&copy;
                        <span itemProp="copyrightYear">2018</span>
                        <span className="with-love"><i className="fa fa-heart"/></span>
                        <span className="author" itemProp="copyrightHolder">王宜明</span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterPage