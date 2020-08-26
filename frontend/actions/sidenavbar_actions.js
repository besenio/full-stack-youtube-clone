export const ISOPEN = "ISOPEN"
export const ISCLOSED = "ISCLOSED"

export const openSidebar = (is_open) => ({
    type: ISOPEN,
    is_open
});

export const closeSidebar = (is_close) => ({
    type: ISCLOSED,
    is_close
});
