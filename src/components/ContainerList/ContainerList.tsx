import React from "react"

import styles from "./index.module.css"

export const ContainerList: React.FC = ({ children }) => (
  <React.Fragment>
    <div className={styles.List}>
    {children}
    </div>
  </React.Fragment>
)
