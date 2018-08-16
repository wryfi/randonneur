async function getCabinetDatacenter(http, cabinet) {
    // TODO: find a better way to handle absolute/fully-qualified URLs returned by the API
    let url = cabinet['datacenter'].split(/.*\/v1/)[1];
    let response = await http.get(url);
    return response.result
}

export async function getCabinets({ api_http, props, state }) {
    let response = await api_http.get('/hardware/cabinets');
    let cabinets = response.result;
    for (var count = 0; count < cabinets.length; count++) {
        let cabinet = cabinets[count];
        cabinet['datacenter'] = await getCabinetDatacenter(api_http, cabinet);
    }
    state.set('hardware.cabinets', cabinets)
}

export async function getCabinet({ api_http, props, state }) {
    let url = '/hardware/cabinets/' + props['slug'];
    let response = await api_http.get(url);
    let cabinet = response.result;
    cabinet['datacenter'] = await getCabinetDatacenter(api_http, cabinet)
    state.set('hardware.cabinet', cabinet)
}