import { createUseStyles } from 'react-jss'

type Props = { type: number }

const pulsatingCss = {
  backgroundSize: '200% 100%',
  animation: '$shine .8s linear infinite',
  background: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
}

const useStyles = createUseStyles({
  loading1: {
    width: 382,
    height: 382,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading2: {
    width: 382,
    height: 382,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    borderBottom: '5px solid #fff',
    border: '5px solid black',
    borderRadius: '50%',
    width: 50,
    height: 50,
    animation: '$spin 1.5s ease infinite',
  },
  loadingCard: {
    width: 320,
    height: 300,
    margin: 10,
    border: '1px solid #F0F0F0',
    boxShadow: '0 1rem 1.125rem 0.125rem rgb(0 0 0 / 12%)',
    borderRadius: 14,
  },
  loadingImage: {
    width: 320,
    height: 150,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    ...pulsatingCss,
  },
  loadingInfo: {
    padding: 15,
    textAlign: 'left',
  },
  loadingStreetAddress: {
    height: 15,
    marginBottom: 5,
    width: '35%',
    ...pulsatingCss,
  },
  loadingAddressUnit: {
    height: 15,
    marginBottom: 5,
    width: '20%',
    ...pulsatingCss,
  },
  loadingSiteInfo: {
    height: 15,
    marginBottom: 5,
    width: '70%',
    ...pulsatingCss,
  },
  loadingPrice: {
    margin: 'auto',
    height: 35,
    width: '60%',
    ...pulsatingCss,
  },
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
  },
  '@keyframes shine': {
    to: {
      'background-position-x': '-200%',
    },
  },
})

export default function Loading({ type }: Props) {
  const classes = useStyles()
  if (type === 1) {
    return (
      <div className={classes.loading1}>
        <div className={classes.spinner} />
      </div>
    )
  } else {
    return (
      <div className={classes.loading2}>
        <div className={classes.loadingCard}>
          <div className={classes.loadingImage} />
          <div className={classes.loadingInfo}>
            <div className={classes.loadingStreetAddress} />
            <div className={classes.loadingAddressUnit} />
            <div className={classes.loadingSiteInfo} />
          </div>

          <div className={classes.loadingPrice} />
        </div>
      </div>
    )
  }
}
