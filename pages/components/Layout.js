const Layout = (props) => {
    return (
        <div className={'w-screen h-screen'}>
            {props.children}
        </div>
    )
}

export default Layout