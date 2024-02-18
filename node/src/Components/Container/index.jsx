import styles from './Container.module.css'
import PropTypes from 'prop-types'


// eslint-disable-next-line react/prop-types
function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
Container.propTypes = {
    children: PropTypes.any
  }.isRequired
  
export default Container
