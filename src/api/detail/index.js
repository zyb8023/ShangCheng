// import axios from 'axios'

import jsonpAdapter from 'axios-jsonp'


const api = {
    requireDetailRecom(skuid) {
        return new Promise((resolve, reject) => {
            axios({
                url: "https://detail.meizu.com/addprice/get",
                params: {
                    skuId: skuid,
                    _: 1550822972304
                }
            }).then(res => resolve(res.data))
                .catch(err => reject(err))
        })
    }
}

export default api;
