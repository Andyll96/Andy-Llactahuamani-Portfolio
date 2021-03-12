import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';


const Code = () => {
    return (
        <motion.div className='below-nav' initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <h1>This is the Code Page</h1>
        </motion.div>
    )
}

export default Code
