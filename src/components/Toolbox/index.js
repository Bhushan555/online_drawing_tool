import React from 'react'
import { COLORS, MENU_ITEMS } from '@/constant';
import styles from './index.module.css';
import { useSelector } from 'react-redux';

const ToolBox = () => {

    const updateBrushSize = (e) => {
        console.log(e.target.value);
    }

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem)
    const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
    const showBrushToolOption = activeMenuItem === MENU_ITEMS.PENCIL || activeMenuItem === MENU_ITEMS.ERASER;
    return (
        <div className={styles.toolboxContainer}>
            {
                showStrokeToolOption && (<div className={styles.toolItem}>
                    <h4 className={styles.toolText}>Stroke Color</h4>
                    <div className={styles.itemContainer}>
                        <div className={styles.colorBox} style={{ backgroundColor: COLORS.BLACK }} />
                        <div className={styles.colorBox} style={{ backgroundColor: COLORS.RED }} />
                        <div className={styles.colorBox} style={{ backgroundColor: COLORS.GREEN }} />
                        <div className={styles.colorBox} style={{ backgroundColor: COLORS.ORANGE }} />
                        <div className={styles.colorBox} style={{ backgroundColor: COLORS.YELLOW }} />
                        <div className={styles.colorBox} style={{ backgroundColor: COLORS.WHITE }} />
                    </div>
                </div>)
            }
            {
                showBrushToolOption && (<div className={styles.toolItem}>
                    <h4 className={styles.toolText}>Brush Size {activeMenuItem}</h4>
                    <div className={styles.itemContainer}>
                        <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} />
                    </div>
                </div>)
            }
            
        </div>
    )
}

export default ToolBox