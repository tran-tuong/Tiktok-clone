import Header from '~/component/Layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;