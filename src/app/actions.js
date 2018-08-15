export function setCurrentPage({ state, props }) {
    let page = props.page;
    if (page) {
        state.set('current_page', page);
    }
}