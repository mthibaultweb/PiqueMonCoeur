import React from 'react'
import styles from './styles.module.css'
import clsx from 'clsx';
import Cards from 'components/Cards'


const Jackpot = () => {
  return (

    <div>
      <p className={clsx(styles.description, )}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo ultrices neque nec volutpat. Nullam dictum arcu sodales iaculis luctus. Nullam nisi mauris, lobortis sed nibh sit amet, placerat luctus mauris. Suspendisse ultricies ultrices neque in luctus. Sed vitae nunc vitae tellus malesuada consectetur. Vivamus eleifend, eros vel vulputate porttitor, justo diam sodales leo, sed aliquam justo nunc id eros. Maecenas consequat nibh quis risus sagittis, ac condimentum urna posuere. Quisque cursus sagittis velit, nec dignissim ligula luctus ut. Quisque et rutrum nisl, eu euismod odio. Vestibulum eleifend placerat quam id finibus. Nulla quis erat auctor, fringilla justo et, lacinia ligula. Quisque tempus eu neque et interdum. Aliquam erat volutpat. Vivamus in tortor non arcu iaculis accumsan. Phasellus suscipit tincidunt ex, eu consectetur urna gravida quis.
      </p>

      <Cards />
    </div>
  )
}

export default Jackpot;
