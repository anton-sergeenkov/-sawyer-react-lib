// import cn from "classnames"
import { SxProps, Theme } from "@mui/material"
import MUIButton from "@mui/material/Button"
import { TOnClick } from "@/sawyer-react-lib/types/common"

import styles from "./styles.module.css"

// https://mui.com/material-ui/api/button/

interface IMUIButtonProps {
  className?: string
  size: "small" | "medium" | "large"
  variant?: "text" | "outlined" | "contained"
  sx?: SxProps<Theme>
  endIcon?: React.ReactNode
  disabled?: boolean
  onClick: TOnClick
}

interface IProps {
  children: React.ReactNode
  buttonProps: IMUIButtonProps
}

const UiButton: React.FC<IProps> = (props) => {
  const { children, buttonProps } = props

  return (
    <MUIButton {...buttonProps} className={styles.button}>
      {children}
    </MUIButton>
  )
}

export default UiButton
