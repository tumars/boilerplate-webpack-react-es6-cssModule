const _ut = (function() {
    const fixNum = function(num) {
        return num.toFixed(2)
    }

    const myfetch = async function(url, option) {
        const res = await fetch(url,option)
        if (!res.ok) {
            return Promise.reject(res)
        } 
        return res.json()
    }
    
    return {
        fixNum,
        fetch: myfetch
    }
})()

export default _ut