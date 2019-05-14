function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {resolve('resolved');}, 3000);
    });
}

//method 1
resolveAfter3Seconds().then(data => {
    console.log(data);
})

//method 2
async function execute()
{
    const result = await resolveAfter3Seconds();
    console.log(result);
}
execute();