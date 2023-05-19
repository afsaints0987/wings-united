import { motion } from "framer-motion"

// eslint-disable-next-line react/prop-types
const Motion = ({children}) => {
  return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} >
            {children}
        </motion.div>
    
  )
}

export default Motion