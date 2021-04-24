import { navigate } from "gatsby"
import { isMobileOnly } from "react-device-detect"
import { routes } from "../routes"

export const call = () => {
  isMobileOnly ? window.open("tel:729976922") : navigate(routes.contact)
}
