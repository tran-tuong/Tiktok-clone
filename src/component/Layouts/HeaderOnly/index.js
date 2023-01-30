import Header from '~/component/Layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="containter">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
