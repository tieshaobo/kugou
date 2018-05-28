import axios from "axios"


export function getNewSong() {
    let newSong = "/api/?json=true";
    return new Promise(function(resolve, reject) {
        axios.get(newSong).then(({ data }) => {
            console.log(data)
            let json = {};
            json.banner = data.banner;
            json.data = data.data;
            resolve(json)
        })
    })

};

export function getSort() {
    let sort = "/api/rank/list?json=true"
    return new Promise(function(resolve, reject) {
        axios.get(sort).then((res) => {
            resolve(res.data.rank)
        })
    })

}