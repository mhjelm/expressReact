console.log('loaded');
document.addEventListener("DOMContentLoaded", function(event) {
    console.log('DOMContentLoaded');

    document.querySelector('#b')
    .addEventListener('click', e => {
        console.log('posting');

        fetch('api/run',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data:42})
        }).then(resp => {
            console.log('got response', resp);
            return resp.json();
        })
        .then(j => {
            console.log('got json', j);
        });
});
});
