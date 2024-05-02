export default (data) => {
    if (typeof window != 'undefined') {
        console.log(data)
        const {accessToken, refreshToken} = data;
        localStorage.setItem('jwtAccessToken', JSON.stringify(accessToken));
        localStorage.setItem('jwtRefreshToken', JSON.stringify(refreshToken));
    }
}