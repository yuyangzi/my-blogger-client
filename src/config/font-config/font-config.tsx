import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faArchive,
    faCalendar, faChevronLeft, faChevronRight, faClock,
    faEye, faFileWord, faFolder,
    faHeartbeat,
    faHome,
    faSearch,
    faTags,
    faTh
} from '@fortawesome/free-solid-svg-icons'

const fontIcons = [faHome, faTh, faArchive, faTags, faHeartbeat, faSearch, faEye, faCalendar, faFileWord, faClock, faFolder, faChevronLeft, faChevronRight];

library.add(...fontIcons);