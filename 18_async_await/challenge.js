function resolveAfter3Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve('resolved');
        }, 3000);
    });
}