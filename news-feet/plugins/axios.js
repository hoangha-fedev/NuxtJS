export default function({$axios}) {
    $axios.onRequest(config => {
        config.headers.common['Authorization'] = process.env.NEW_API_KEY;
    })
}