/*Using fetch and do a promise*/

async function data() {
    try {
        const res = await fetch('https://xjsonplaceholder.ytypicode.com/posts1');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
data()
