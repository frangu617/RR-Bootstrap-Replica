

function Banner() {
    const bannerStyle = {
        backgroundColor: '#deedd6',
        paddingLeft: '10px',
        textAlign: 'center',
        height: '30vh',
        alignItems: 'center',
    }

    const imageStyle = {
        height: '30vh'
        
    }

    const textStyle = {
        flex: 1,
        margin: '0 auto',
        alignItems: 'center',
    }
    return (
        <div className="d-flex justify-content-between" style={bannerStyle}>
            <div style={textStyle}>
                <h1>Order groceries for delivery or pickup today</h1>
                <p>Whatever you want from local stores, brought right to your door</p>
            </div>
            <div className="d-flex justify-content-end">
                <img src="https://www.instacart.com/image-server/x428/www.instacart.com/assets/homepage/homepage_background_full_m3_cropped-8d2d286263821da7decd7c61fb1db1eb0e3dec13e0c356277d6d3cb7484c024a.jpg" style={imageStyle} />
            </div>
        </div>
    )
}

export default Banner