import { createUseStyles } from 'react-jss'

type Props = {
  propertyDetails: {
    listingInfo: {
      status: string
      price: number
      priceUnit: string
      imageUrl: string
    }
    address: {
      streetAddress: string
      unit: string
      city: string
      state: string
      zipcode: string
    }
    livingSpace: {
      bedrooms: {
        count: number
      }
      bathrooms: {
        count: number
      }
    }
    site: {
      area: number
      areaUnit: string
    }
  }
}

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const useStyles = createUseStyles({
  card: {
    width: 320,
    height: 300,
    margin: 10,
    border: '1px solid #F0F0F0',
    boxShadow: '0 1rem 1.125rem 0.125rem rgb(0 0 0 / 12%)',
    borderRadius: 14,
  },
  image: {
    width: 320,
    height: 150,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
  },
  info: {
    padding: 15,
    textAlign: 'left',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default function PropertyCard({ propertyDetails }: Props) {
  const classes = useStyles()
  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        alt={'property-card'}
        src={propertyDetails.listingInfo.imageUrl}
      />
      <div className={classes.info}>
        <div>{propertyDetails.address.streetAddress}</div>
        <div>{propertyDetails.address.unit}</div>
        <div>
          {propertyDetails.livingSpace.bedrooms.count} Beds |{' '}
          {propertyDetails.livingSpace.bathrooms.count} Baths |{' '}
          {propertyDetails.site.area} {propertyDetails.site.areaUnit}
        </div>
      </div>

      <div className={classes.price}>
        {propertyDetails.listingInfo.status}{' '}
        {priceFormatter.format(propertyDetails.listingInfo.price)}
      </div>
    </div>
  )
}
