import Page from "../layouts/main";

const Loading = () => (
    <Page>
        <div>
            <div className="loadingBg" />
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        </div>

    </Page>
)

export default Loading