import {
  faTrash,
  faSignOutAlt,
  faEdit,
  faUnlink,
  faSpinner,
  faPlusCircle,
  faHashtag,
  faEnvelopeOpenText,
  faMapMarkedAlt,
  faArrowRight,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { library, text } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
  return library.add(
    faTrash,
    faSignOutAlt,
    faEdit,
    faUnlink,
    faSpinner,
    faPlusCircle,
    faHashtag,
    faEnvelopeOpenText,
    faMapMarkedAlt,
    faArrowRight,
    faLock
  );
};

export default Icons;
