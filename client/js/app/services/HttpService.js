export class HttpService {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
            })
        .then(res => res.json())
        .then(json => {
            return resolve(json) 
        })
        .catch(error => reject(error))
        })
    }

    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
        .then(res=> res.json())
        .then(json => { console.log(json.body) })
        .catch(error => reject(error))
        })
    }
}