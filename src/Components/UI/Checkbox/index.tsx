import React from 'react'

import styles from './index.module.scss'

function CheckboxComponent({ checkboxHandler }: { checkboxHandler: () => void }) {
    return <input type="checkbox" className={styles['checkbox']} onChange={checkboxHandler} />
}

export const Checkbox = React.memo(CheckboxComponent)
